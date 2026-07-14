"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";

export default function CallbackPage() {
  const [message, setMessage] = useState("Authorizing...");
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    async function authorize() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
        setMessage("No authorization code received.");
        return;
      }
      const codeVerifier = sessionStorage.getItem("code_verifier");

if (!codeVerifier) {
  setMessage("Missing PKCE code verifier.");
  return;
}

      try {
        const res = await fetch("/api/auth/callback", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    code,
    codeVerifier,
  }),
});

const data = await res.json();

if (data.access_token) {
  // Save the token
  sessionStorage.setItem(
    "deriv_access_token",
    data.access_token
  );

  // Save expiration time (optional)
  sessionStorage.setItem(
    "deriv_expires_in",
    data.expires_in.toString()
  );

  // Redirect to dashboard
  window.location.href = "/dashboard";

  return;
}

setResponse(data);
setMessage("Authorization successful!");
      } catch (error) {
        console.error(error);
        setMessage("Authorization failed.");
      }
    }

    authorize();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 p-8 rounded-2xl max-w-2xl w-full">
       <h1 className="text-3xl font-bold text-red-500 mb-6">
  THIS IS THE NEW CALLBACK PAGE
</h1>

        <p className="mb-6">{message}</p>

        {response && (
          <pre className="bg-slate-800 p-4 rounded-xl overflow-auto text-green-400">
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
      </div>
    </main>
  );
}