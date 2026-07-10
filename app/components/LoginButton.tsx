"use client";

import { generateChallenge } from "pkce-challenge";
import { CLIENT_ID, REDIRECT_URI, SCOPES } from "../lib/deriv";

export default function LoginButton() {
  const login = async () => {
    // Generate PKCE values
    const { code_verifier, code_challenge } = await generateChallenge();

    // Save verifier for later when exchanging the code for a token
    sessionStorage.setItem("code_verifier", code_verifier);

    // Create a random state value
    const state = crypto.randomUUID();
    sessionStorage.setItem("oauth_state", state);

    const url =
      `https://auth.deriv.com/oauth2/auth` +
      `?client_id=${CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&response_type=code` +
      `&scope=${encodeURIComponent(SCOPES)}` +
      `&state=${state}` +
      `&code_challenge=${code_challenge}` +
      `&code_challenge_method=S256`;

    window.location.href = url;
  };

  return (
    <button
      onClick={login}
      className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/60"
    >
      Connect with Deriv
    </button>
  );
}