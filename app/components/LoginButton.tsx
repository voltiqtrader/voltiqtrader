"use client";

import pkceChallenge from "pkce-challenge";
import { CLIENT_ID, REDIRECT_URI, SCOPES } from "../lib/deriv";

export default function LoginButton() {
  const login = async () => {
    alert("Login button clicked");

   const {
    code_verifier,
    code_challenge,
    code_challenge_method,
  } = await pkceChallenge();

  sessionStorage.setItem("code_verifier", code_verifier);

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
      `&code_challenge_method=${code_challenge_method}`;

    console.log(url);
    alert(url);
    alert(code_verifier);

alert(code_challenge);

    window.location.href = url;
  };

  return (
    <button
      onClick={login}
      className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-semibold"
    >
      Connect with Deriv
    </button>
  );
}