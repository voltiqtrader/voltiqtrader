import { NextRequest, NextResponse } from "next/server";
import { CLIENT_ID, REDIRECT_URI } from "@/app/lib/deriv";

export async function POST(request: NextRequest) {
  try {
    const { code, codeVerifier } = await request.json();

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      code,
      code_verifier: codeVerifier,
      redirect_uri: REDIRECT_URI,
    });

    const response = await fetch("https://auth.deriv.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Token exchange failed",
      },
      { status: 500 }
    );
  }
}