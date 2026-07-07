export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400">
          VoltiqTrader
        </h1>

        <p className="text-xl mt-6 text-gray-300">
          Trade Smarter. Analyze Better.
        </p>

        <button className="mt-10 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-lg font-semibold">
          Connect with Deriv
        </button>
      </div>
    </main>
  );
}