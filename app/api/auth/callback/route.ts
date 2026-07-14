import { NextRequest, NextResponse } from "next/server";
import { CLIENT_ID, REDIRECT_URI } from "@/app/lib/deriv";

export async function POST(request: NextRequest) {
  try {
    const { code, codeVerifier } = await request.json();
console.log("REDIRECT_URI used for token exchange:", process.env.NEXT_PUBLIC_REDIRECT_URI);
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      code,
      code_verifier: codeVerifier,
      redirect_uri: REDIRECT_URI,
    });
console.log("CLIENT_ID:", CLIENT_ID);
console.log("REDIRECT_URI:", REDIRECT_URI);
console.log("CODE:", code);
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