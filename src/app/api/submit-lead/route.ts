import { NextRequest, NextResponse } from "next/server";

// Interface for geolocation data
interface GeoLocation {
  latitude: number;
  longitude: number;
}

// Interface for user metadata
interface UserMetadata {
  user_ip: string;
  country: string;
  city: string;
  latitude?: number;
  longitude?: number;
}

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

// Function to get geolocation data from IP using free API
async function getGeoLocation(ip: string): Promise<GeoLocation | null> {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });
    
    if (!response.ok) {
      console.warn(`Geolocation API failed with status: ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    
    if (data.latitude && data.longitude) {
      return {
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
      };
    }
    
    return null;
  } catch (error) {
    console.warn('Error fetching geolocation:', error instanceof Error ? error.message : error);
    return null;
  }
}

// Function to get real IP address (works even locally)
async function getRealIpAddress(): Promise<string> {
  try {
    // Use a service to get the real external IP
    const response = await fetch('https://api.ipify.org?format=json', {
      method: 'GET',
      signal: AbortSignal.timeout(3000),
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.ip;
    }
  } catch (error) {
    console.warn('Could not get real IP:', error instanceof Error ? error.message : error);
  }
  
  // Fallback to request headers
  return 'unknown';
}

// Function to extract user metadata from request headers
function extractUserMetadata(request: NextRequest): UserMetadata {
  const headers = request.headers;
  
  // Get real IP from Cloudflare headers first
  const userIp = headers.get('cf-connecting-ip') || 
               headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               'unknown';
  
  // Get location data from Cloudflare headers
  const country = headers.get('cf-ipcountry') || 'unknown';
  const city = headers.get('cf-ipcity') || 'unknown';
  
  return {
    user_ip: userIp,
    country,
    city,
  };
}

// Function to extract device information from User-Agent header
function extractDeviceInfo(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Device type detection
  let deviceType = 'Desktop';
  if (/Mobile|Android|iPhone|iPad|iPod/.test(userAgent)) {
    deviceType = /iPad/.test(userAgent) ? 'Tablet' : 'Mobile';
  }
  
  // Browser detection
  let browser = 'Unknown';
  if (/Chrome/.test(userAgent) && !/Edg/.test(userAgent)) {
    browser = 'Chrome';
  } else if (/Firefox/.test(userAgent)) {
    browser = 'Firefox';
  } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    browser = 'Safari';
  } else if (/Edg/.test(userAgent)) {
    browser = 'Edge';
  } else if (/Opera|OPR/.test(userAgent)) {
    browser = 'Opera';
  }
  
  // OS detection
  let os = 'Unknown';
  if (/Windows/.test(userAgent)) {
    os = 'Windows';
  } else if (/Mac/.test(userAgent)) {
    os = 'macOS';
  } else if (/Linux/.test(userAgent)) {
    os = 'Linux';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/iOS|iPhone|iPad|iPod/.test(userAgent)) {
    os = 'iOS';
  }
  
  return {
    userAgent,
    deviceType,
    browser,
    os,
  };
}
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
    // Extract user metadata from Cloudflare headers
    let userMetadata = extractUserMetadata(request);
    
    // Extract device information
    const deviceInfo = extractDeviceInfo(request);
    
    // If IP is unknown or local, get real external IP
    if (userMetadata.user_ip === 'unknown' || userMetadata.user_ip === '::1' || userMetadata.user_ip === '127.0.0.1') {
      const realIp = await getRealIpAddress();
      if (realIp !== 'unknown') {
        userMetadata = {
          ...userMetadata,
          user_ip: realIp
        };
      }
    }
    
    // Rate limiting using the real user IP
    if (!checkRateLimit(userMetadata.user_ip)) {
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
    
    // Get geolocation data if IP is valid and not unknown
    let geoLocation: GeoLocation | null = null;
    if (userMetadata.user_ip !== 'unknown' && userMetadata.user_ip !== '127.0.0.1') {
      geoLocation = await getGeoLocation(userMetadata.user_ip);
    }
    
    // Merge user metadata with geolocation data
    const completeUserMetadata: UserMetadata = {
      ...userMetadata,
      latitude: geoLocation?.latitude,
      longitude: geoLocation?.longitude,
    };
    
    // Log the data being sent for debugging (including metadata)
    console.log("📤 Sending to Google Sheets:", {
      name,
      email,
      phone,
      message: messageToSend,
      otpVerified: isOtpVerified,
      otpVerifiedType: typeof otpVerified,
      userMetadata: completeUserMetadata,
      deviceInfo,
    });

    // External API URL for lead submission
    const externalApiUrl = "https://wyce-backend.wycecorp.in/api/leads/external-submit";
    
    // Prepare payload for external API
    const externalApiPayload = {
      name: name,
      phone: phone,
      email: email,
      status: "Warm", // Default status
      leadVerificationStatus: "Verified", // Default verification status
      verificationType: "Phone Number", // Default verification type
      remark: messageToSend || "Requested brochure" // Use message as remark or default
    };
    
    console.log("📤 Sending to external API:", externalApiPayload);

    // Submit to external API (CRM)
    let externalApiSuccess = false;
    let externalApiError = "";
    
    try {
      const response = await fetch(externalApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Origin": "https://wycecorp.com", // Add Origin header for authorization
        },
        body: JSON.stringify(externalApiPayload),
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });

      const status = response.status;
      const statusText = response.statusText;
      
      console.log(`External API response: ${status} ${statusText}`);

      if (response.ok) {
        try {
          const data = await response.json();
          console.log("✅ External API response data:", data);
          externalApiSuccess = true;
        } catch {
          // Response might be text or empty - still consider success if status is ok
          const text = await response.text();
          console.log("✅ External API response (non-JSON):", text.substring(0, 200));
          externalApiSuccess = true;
        }
      } else {
        const errorText = await response.text();
        console.error(`❌ External API error (${status}):`, errorText.substring(0, 200));
        externalApiError = `CRM API error: ${errorText.substring(0, 100)}`;
      }
    } catch (externalApiError: unknown) {
      const errorMessage = externalApiError instanceof Error ? externalApiError.message : String(externalApiError);
      console.error("❌ External API call failed:", errorMessage);
      externalApiError = "Failed to connect to CRM API";
    }

    // Now submit to Google Sheets
    console.log("📤 Also sending to Google Sheets:", {
      name,
      email,
      phone,
      message: messageToSend,
      otpVerified: isOtpVerified,
      userMetadata: completeUserMetadata,
      deviceInfo,
    });

    // Google Apps Script Web App URL from environment variables
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not configured");
      // Still return success if CRM worked, otherwise error
      if (externalApiSuccess) {
        return NextResponse.json({
          success: true,
          method: "CRM API only (Google Sheets not configured)",
          externalApiSuccess: true,
          googleSheetsSuccess: false,
          message: "Submitted to CRM successfully (Google Sheets not available)"
        });
      } else {
        return NextResponse.json(
          { success: false, error: "Both CRM API and Google Sheets not configured" },
          { status: 500 }
        );
      }
    }

    let googleSheetsSuccess = false;
    let googleSheetsError = "";

    // Try JSON first for Google Sheets
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
          user_ip: completeUserMetadata.user_ip,
          country: completeUserMetadata.country,
          city: completeUserMetadata.city,
          latitude: completeUserMetadata.latitude || null,
          longitude: completeUserMetadata.longitude || null,
          userAgent: deviceInfo.userAgent,
          deviceType: deviceInfo.deviceType,
          browser: deviceInfo.browser,
          os: deviceInfo.os,
        }),
        redirect: "follow", // Follow redirects
      });

      const status = response.status;
      const statusText = response.statusText;
      
      console.log(`Google Apps Script response: ${status} ${statusText}`);

      if (response.ok) {
        try {
          const data = await response.json();
          console.log("✅ Google Apps Script response data:", data);
          googleSheetsSuccess = true;
        } catch {
          // Response might be HTML or empty - still consider success if status is ok
          const text = await response.text();
          console.log("✅ Google Apps Script response (non-JSON):", text.substring(0, 200));
          googleSheetsSuccess = true;
        }
      } else {
        const errorText = await response.text();
        console.error(`❌ Google Apps Script error (${status}):`, errorText.substring(0, 200));
        googleSheetsError = `Google Sheets error: ${errorText.substring(0, 100)}`;
      }
    } catch (jsonError: unknown) {
      const errorMessage = jsonError instanceof Error ? jsonError.message : String(jsonError);
      console.error("❌ Google Sheets JSON method failed:", errorMessage);
      googleSheetsError = "Google Sheets JSON method failed";
    }

    // Try FormData as fallback for Google Sheets
    if (!googleSheetsSuccess) {
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("message", messageToSend);
        formData.append("otpVerified", isOtpVerified ? "true" : "false");
        formData.append("user_ip", completeUserMetadata.user_ip);
        formData.append("country", completeUserMetadata.country);
        formData.append("city", completeUserMetadata.city);
        formData.append("latitude", completeUserMetadata.latitude?.toString() || "");
        formData.append("longitude", completeUserMetadata.longitude?.toString() || "");
        formData.append("userAgent", deviceInfo.userAgent);
        formData.append("deviceType", deviceInfo.deviceType);
        formData.append("browser", deviceInfo.browser);
        formData.append("os", deviceInfo.os);

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
            console.log("✅ Google Apps Script FormData response data:", data);
            googleSheetsSuccess = true;
          } catch {
            const text = await response.text();
            console.log("✅ Google Apps Script FormData response (non-JSON):", text.substring(0, 500));
            googleSheetsSuccess = true;
          }
        } else {
          const errorText = await response.text();
          console.error(`❌ Google Apps Script FormData error (${status}):`, errorText.substring(0, 200));
          if (!googleSheetsError) {
            googleSheetsError = `Google Sheets FormData error: ${errorText.substring(0, 100)}`;
          }
        }
      } catch (formError: unknown) {
        const errorMessage = formError instanceof Error ? formError.message : String(formError);
        console.error("❌ Google Sheets FormData method failed:", errorMessage);
        if (!googleSheetsError) {
          googleSheetsError = "Google Sheets FormData method failed";
        }
      }
    }

    // Try URL-encoded as last resort for Google Sheets
    if (!googleSheetsSuccess) {
      try {
        const params = new URLSearchParams();
        params.append("name", name);
        params.append("email", email);
        params.append("phone", phone);
        params.append("message", messageToSend);
        params.append("otpVerified", isOtpVerified ? "true" : "false");
        params.append("user_ip", completeUserMetadata.user_ip);
        params.append("country", completeUserMetadata.country);
        params.append("city", completeUserMetadata.city);
        params.append("latitude", completeUserMetadata.latitude?.toString() || "");
        params.append("longitude", completeUserMetadata.longitude?.toString() || "");
        params.append("userAgent", deviceInfo.userAgent);
        params.append("deviceType", deviceInfo.deviceType);
        params.append("browser", deviceInfo.browser);
        params.append("os", deviceInfo.os);

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
            console.log("✅ Google Apps Script URL-encoded response data:", data);
            googleSheetsSuccess = true;
          } catch {
            console.log("✅ Google Apps Script URL-encoded submitted successfully");
            googleSheetsSuccess = true;
          }
        } else {
          const errorText = await response.text();
          console.error(`❌ Google Apps Script URL-encoded error:`, errorText.substring(0, 200));
          if (!googleSheetsError) {
            googleSheetsError = "All Google Sheets methods failed";
          }
        }
      } catch (urlError: unknown) {
        const errorMessage = urlError instanceof Error ? urlError.message : String(urlError);
        console.error("❌ Google Sheets URL-encoded method failed:", errorMessage);
        if (!googleSheetsError) {
          googleSheetsError = "All Google Sheets methods failed";
        }
      }
    }

    // Return combined result
    const overallSuccess = externalApiSuccess || googleSheetsSuccess;
    const successMessage = [];
    const errors = [];

    if (externalApiSuccess) {
      successMessage.push("CRM API");
    } else if (externalApiError) {
      errors.push(externalApiError);
    }

    if (googleSheetsSuccess) {
      successMessage.push("Google Sheets");
    } else if (googleSheetsError) {
      errors.push(googleSheetsError);
    }

    return NextResponse.json({
      success: overallSuccess,
      method: "Multiple APIs",
      externalApiSuccess,
      googleSheetsSuccess,
      message: overallSuccess 
        ? `Submitted successfully to: ${successMessage.join(", ")}`
        : "All submission methods failed",
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    console.error("Error in submit-lead API:", error);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
