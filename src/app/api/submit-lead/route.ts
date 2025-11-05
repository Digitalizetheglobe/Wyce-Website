import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Google Apps Script Web App URL
    // This is your Web App URL from Google Apps Script deployment
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzov0JFTSJe_1NUbCVWBaug12w1WKvAO2hjZbxXWFFuVJoBG1Tka6o00aQiE8KgqswMyw/exec";

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
          message,
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
      formData.append("message", message);

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
    params.append("message", message);

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

