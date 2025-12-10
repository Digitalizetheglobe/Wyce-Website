import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber, otp } = body;

    // Validate inputs
    if (!phoneNumber || !otp) {
      return NextResponse.json(
        { success: false, error: "Phone number and OTP are required" },
        { status: 400 }
      );
    }

    // Format phone number - add country code if not present (assuming India +91)
    let formattedPhone = phoneNumber.replace(/\D/g, ""); // Remove non-digits
    
    // If phone number is 10 digits, assume it's Indian and add +91
    if (formattedPhone.length === 10) {
      formattedPhone = `91${formattedPhone}`;
    }
    
    // Ensure it starts with country code
    if (!formattedPhone.startsWith("91")) {
      if (formattedPhone.length === 10) {
        formattedPhone = `91${formattedPhone}`;
      }
    }

    // Get API credentials from environment variables (server-side only)
    const apiUrl = process.env.ULTRAMSG_API_URL || "https://api.ultramsg.com/instance148323/messages/chat";
    const apiToken = process.env.ULTRAMSG_API_TOKEN;
    
    if (!apiToken) {
      console.error("ULTRAMSG_API_TOKEN is not configured in environment variables");
      return NextResponse.json(
        { 
          success: false, 
          error: "OTP service is not configured. Please contact support.",
          details: process.env.NODE_ENV === "development" ? "ULTRAMSG_API_TOKEN environment variable is missing" : undefined
        },
        { status: 500 }
      );
    }
    
    const fullApiUrl = `${apiUrl}?token=${apiToken}`;
    const message = `Your OTP for Wyce Exclucity is: ${otp}. Please enter this code to verify your submission.`;

    const response = await fetch(fullApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: formattedPhone,
        body: message,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      const text = await response.text();
      console.error("Non-JSON response from UltraMsg API:", text);
      return NextResponse.json({
        success: false,
        error: "Failed to send OTP. Please try again.",
      });
    }

    // Check various success indicators
    if (response.ok && (data.sent === true || data.success === true || data.id)) {
      return NextResponse.json({ success: true });
    } else {
      // Check if it's a WhatsApp number error
      const errorMessage = data.message || data.error || data.reason || "Failed to send OTP";
      
      // Common error messages that indicate non-WhatsApp number
      const whatsappErrors = [
        "not a whatsapp number",
        "not registered on whatsapp",
        "invalid whatsapp number",
        "phone number not found",
        "invalid number",
        "number not registered",
      ];
      
      const isWhatsAppError = whatsappErrors.some((err) =>
        errorMessage.toLowerCase().includes(err)
      );

      if (isWhatsAppError) {
        return NextResponse.json({
          success: false,
          error: "Please enter your proper WhatsApp number",
        });
      }

      return NextResponse.json({
        success: false,
        error: errorMessage || "Failed to send OTP. Please try again.",
      });
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to send OTP";
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("Error sending OTP:", errorMessage, errorStack);
    return NextResponse.json(
      { 
        success: false, 
        error: "Network error. Please try again later.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

