"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("deriv_access_token");

    if (!storedToken) {
      window.location.href = "/";
      return;
    }

    setToken(storedToken);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6">
          VoltiqTrader Dashboard
        </h1>

        <p className="text-green-400 mb-4">
          ✅ Successfully connected to Deriv
        </p>

        <p className="mb-2">
          Access Token:
        </p>

        <pre className="bg-slate-800 p-4 rounded-xl overflow-auto text-green-400">
          {token}
        </pre>
      </div>
    </main>
  );
}