/**
 * Utility function to send OTP via WhatsApp using UltraMsg API
 * This function calls a server-side API route to keep the API token secure
 * @param phoneNumber - Phone number to send OTP to (should include country code)
 * @param otp - The OTP code to send
 * @returns Promise<{ success: boolean; error?: string }>
 */
export async function sendOTP(
  phoneNumber: string,
  otp: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Call server-side API route instead of directly calling UltraMsg API
    // This keeps the API token secure on the server
    const response = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
        otp,
      }),
    });

    const data = await response.json();
    return data;
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
