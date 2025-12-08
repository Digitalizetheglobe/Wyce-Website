/**
 * Utility function to send OTP via WhatsApp using UltraMsg API
 * @param phoneNumber - Phone number to send OTP to (should include country code)
 * @param otp - The OTP code to send
 * @returns Promise<{ success: boolean; error?: string }>
 */
export async function sendOTP(
  phoneNumber: string,
  otp: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Format phone number - add country code if not present (assuming India +91)
    let formattedPhone = phoneNumber.replace(/\D/g, ""); // Remove non-digits
    
    // If phone number is 10 digits, assume it's Indian and add +91
    if (formattedPhone.length === 10) {
      formattedPhone = `91${formattedPhone}`;
    }
    
    // Ensure it starts with country code
    if (!formattedPhone.startsWith("91")) {
      // If it doesn't start with 91, try to add it
      if (formattedPhone.length === 10) {
        formattedPhone = `91${formattedPhone}`;
      }
    }

    const apiUrl = `https://api.ultramsg.com/instance148323/messages/chat?token=2x4lm3o0xznfnl3h`;
    
    const message = `Your OTP for Wyce Exclucity is: ${otp}. Please enter this code to verify your submission.`;

    const response = await fetch(apiUrl, {
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
      // If response is not JSON, try to get text
      const text = await response.text();
      console.error("Non-JSON response from UltraMsg API:", text);
      return {
        success: false,
        error: "Failed to send OTP. Please try again.",
      };
    }

    // Check various success indicators
    if (response.ok && (data.sent === true || data.success === true || data.id)) {
      return { success: true };
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
        return {
          success: false,
          error: "Please enter your proper WhatsApp number",
        };
      }

      return {
        success: false,
        error: errorMessage || "Failed to send OTP. Please try again.",
      };
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send OTP";
    console.error("Error sending OTP:", errorMessage);
    return {
      success: false,
      error: "Network error. Please try again later.",
    };
  }
}

/**
 * Generate a random 6-digit OTP
 * @returns string - 6-digit OTP
 */
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
