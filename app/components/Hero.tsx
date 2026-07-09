import LoginButton from "./LoginButton";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">
      <h2 className="text-6xl font-bold leading-tight">
        Trade Smarter.
        <br />
        Analyze Better.
      </h2>

      <p className="mt-8 max-w-2xl text-xl text-gray-400">
        A modern trading platform built for Deriv traders with
        AI-powered analytics, trading tools, and account management.
      </p>

      <div className="mt-12 flex gap-6">
        <LoginButton />

        <button className="rounded-xl border border-slate-600 bg-slate-900 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400">
          Learn More
        </button>
      </div>
    </section>
  );
}