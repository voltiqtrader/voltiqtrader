"use client";

import { useSearchParams } from "next/navigation";

export default function CallbackPage() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          Deriv OAuth Callback
        </h1>

        <div className="space-y-4">
          <div>
            <p className="font-semibold">Authorization Code</p>
            <p className="break-all text-green-400">
              {code || "No code received"}
            </p>
          </div>

          <div>
            <p className="font-semibold">State</p>
            <p>{state || "No state received"}</p>
          </div>

          <div>
            <p className="font-semibold">Error</p>
            <p className="text-red-400">
              {error || "None"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}