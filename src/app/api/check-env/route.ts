import { NextResponse } from "next/server";

/**
 * Diagnostic endpoint to check if environment variables are configured
 * This endpoint only returns whether variables exist, not their values
 */
export async function GET() {
  const hasToken = !!process.env.ULTRAMSG_API_TOKEN;
  const hasApiUrl = !!process.env.ULTRAMSG_API_URL;
  
  return NextResponse.json({
    environment: process.env.NODE_ENV,
    variables: {
      ULTRAMSG_API_TOKEN: hasToken ? "✓ Configured" : "✗ Missing",
      ULTRAMSG_API_URL: hasApiUrl ? "✓ Configured" : "Using default",
    },
    status: hasToken ? "ready" : "not_configured",
    message: hasToken 
      ? "Environment variables are properly configured" 
      : "ULTRAMSG_API_TOKEN is missing. Please add it in Vercel Settings → Environment Variables",
  });
}

