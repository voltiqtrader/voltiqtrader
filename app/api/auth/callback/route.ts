import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { code, codeVerifier } = await request.json();

    if (!code || !codeVerifier) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing code or codeVerifier",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Received authorization data.",
      code,
      codeVerifier,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request",
      },
      { status: 500 }
    );
  }
}
