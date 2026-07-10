"use client";

import { useEffect, useState } from "react";

export default function CallbackPage() {
  const [code, setCode] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setCode(params.get("code") || "");
    setState(params.get("state") || "");
    setError(params.get("error") || "");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          Deriv OAuth Callback
        </h1>

        <p className="mb-4">
          <strong>Authorization Code:</strong>
        </p>
        <p className="break-all text-green-400">
          {code || "Waiting..."}
        </p>

        <p className="mt-6">
          <strong>State:</strong>
        </p>
        <p>{state || "None"}</p>

        <p className="mt-6">
          <strong>Error:</strong>
        </p>
        <p className="text-red-400">
          {error || "None"}
        </p>
      </div>
    </main>
  );
}