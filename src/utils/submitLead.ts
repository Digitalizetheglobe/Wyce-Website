/**
 * Utility function to submit lead form data to Google Apps Script Web App
 * Uses Next.js API route to avoid CORS issues
 * @param formData - Object containing name, email, phone, and message
 * @param onSuccess - Optional callback when submission succeeds
 * @param onError - Optional callback when submission fails
 * @returns Promise<void> - Doesn't block, submission happens in background
 */
export async function submitLead(
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  },
  onSuccess?: () => void,
  onError?: (error: string) => void
): Promise<void> {
  // Fire and forget - don't wait for response
  fetch("/api/submit-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }),
  })
    .then(async (response) => {
      const data = await response.json();

      if (data.success) {
        console.log(`✅ Form submitted successfully via ${data.method || "API route"}`);
        
        // If Google Apps Script returned a response, log it
        if (data.data) {
          if (data.data.result === "error") {
            console.error("⚠️ Google Apps Script returned an error:", data.data.error);
            if (onError) {
              onError("Submission received but failed to process. Please try again.");
            }
          } else if (data.data.result === "success") {
            console.log("✅ Google Apps Script confirmed success!");
            if (onSuccess) {
              onSuccess();
            }
          }
        } else {
          // No response data, assume success
          if (onSuccess) {
            onSuccess();
          }
        }
      } else {
        console.error("❌ Form submission failed:", data.error);
        if (onError) {
          onError(data.error || "Failed to submit form. Please try again.");
        }
      }
    })
    .catch((error: any) => {
      console.error("❌ Error submitting form:", error.message);
      if (onError) {
        onError("Network error. Your submission may not have been received.");
      }
    });
}

