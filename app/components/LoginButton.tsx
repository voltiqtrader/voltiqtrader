"use client";

import { CLIENT_ID } from "../lib/deriv";

export default function LoginButton() {
  const login = () => {
    const redirectUri = "http://localhost:3000/auth/callback";

    const url =
      `https://oauth.deriv.com/oauth2/authorize` +
      `?client_id=${CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&response_type=code`;

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