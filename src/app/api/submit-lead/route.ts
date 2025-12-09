import { NextRequest, NextResponse } from "next/server";

// Simple rate limiting store (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);
  
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    let { name, email, phone, message } = body;
    const { otpVerified } = body;

    // Sanitize inputs
    name = sanitizeInput(String(name || ''));
    email = sanitizeInput(String(email || ''));
    phone = sanitizeInput(String(phone || ''));
    message = message ? sanitizeInput(String(message)) : '';

    // Validate required fields (message is optional)
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone (should be digits only, 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Google Apps Script requires a non-empty message, so use a default if empty
    const messageToSend = message || "No message provided";
    
    // OTP verification status (default to false if not provided)
    const isOtpVerified = otpVerified === true;
    
    // Log the data being sent for debugging
    console.log("📤 Sending to Google Sheets:", {
      name,
      email,
      phone,
      message: messageToSend,
      otpVerified: isOtpVerified,
      otpVerifiedType: typeof otpVerified,
    });

    // Google Apps Script Web App URL from environment variables
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not configured");
      return NextResponse.json(
        { success: false, error: "Submission service is not configured" },
        { status: 500 }
      );
    }

    // Try JSON first
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: messageToSend,
          otpVerified: isOtpVerified ? "true" : "false", // Send as string for better compatibility
        }),
        redirect: "follow", // Follow redirects
      });

      const status = response.status;
      const statusText = response.statusText;
      
      console.log(`Google Apps Script response: ${status} ${statusText}`);

      if (response.ok) {
        try {
          const data = await response.json();
          console.log("Google Apps Script response data:", data);
          return NextResponse.json({
            success: true,
            method: "JSON",
            data,
            status,
          });
        } catch {
          // Response might be HTML or empty - still consider success if status is ok
          const text = await response.text();
          console.log("Google Apps Script response (non-JSON):", text.substring(0, 200));
          return NextResponse.json({
            success: true,
            method: "JSON",
            message: "Submitted successfully (no JSON response body)",
            status,
          });
        }
      } else {
        const errorText = await response.text();
        console.error(`Google Apps Script error (${status}):`, errorText.substring(0, 200));
      }
    } catch (jsonError: unknown) {
      const errorMessage = jsonError instanceof Error ? jsonError.message : String(jsonError);
      console.error("JSON method failed:", errorMessage);
    }

    // Try FormData as fallback
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", messageToSend);
      formData.append("otpVerified", isOtpVerified ? "true" : "false");

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        redirect: "follow",
      });

      const status = response.status;
      const statusText = response.statusText;
      
      console.log(`Google Apps Script FormData response: ${status} ${statusText}`);

      if (response.ok) {
        try {
          const data = await response.json();
          console.log("Google Apps Script FormData response data:", data);
          return NextResponse.json({
            success: true,
            method: "FormData",
            data,
            status,
          });
        } catch {
          // Response might be HTML, text, or empty
          const text = await response.text();
          console.log("Google Apps Script FormData response (non-JSON):", text.substring(0, 500));
          
          // Check if it's an error message
          if (text.toLowerCase().includes('error') || text.toLowerCase().includes('exception')) {
            console.error("⚠️ Google Apps Script may have returned an error:", text.substring(0, 200));
          }
          
          return NextResponse.json({
            success: true,
            method: "FormData",
            message: "Submitted successfully (no JSON response body)",
            responseText: text.substring(0, 200), // Include first 200 chars for debugging
            status,
          });
        }
      } else {
        const errorText = await response.text();
        console.error(`Google Apps Script FormData error (${status}):`, errorText.substring(0, 200));
      }
    } catch (formError: unknown) {
      const errorMessage = formError instanceof Error ? formError.message : String(formError);
      console.error("FormData method failed:", errorMessage);
    }

    // Try URL-encoded as last resort
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("phone", phone);
    params.append("message", messageToSend);
    params.append("otpVerified", isOtpVerified ? "true" : "false");

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      redirect: "follow",
    });

    if (response.ok) {
      try {
        const data = await response.json();
        return NextResponse.json({
          success: true,
          method: "URL-encoded",
          data,
        });
      } catch {
        return NextResponse.json({
          success: true,
          method: "URL-encoded",
          message: "Submitted successfully (no response body)",
        });
      }
    }

    return NextResponse.json(
      { success: false, error: "All submission methods failed" },
      { status: 500 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    console.error("Error in submit-lead API:", error);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

