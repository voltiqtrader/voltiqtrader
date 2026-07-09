export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 border-r border-slate-800 p-8">

      <h1 className="text-3xl font-bold text-cyan-400 mb-12">
        VoltiqTrader
      </h1>

      <nav className="space-y-4">

        <a
          href="#"
          className="block rounded-xl px-5 py-4 bg-cyan-500 text-white font-semibold"
        >
          📊 Dashboard
        </a>

        <a
          href="#"
          className="block rounded-xl px-5 py-4 hover:bg-slate-800 transition"
        >
          📈 Markets
        </a>

        <a
          href="#"
          className="block rounded-xl px-5 py-4 hover:bg-slate-800 transition"
        >
          💹 Trade
        </a>

        <a
          href="#"
          className="block rounded-xl px-5 py-4 hover:bg-slate-800 transition"
        >
          👤 Account
        </a>

        <a
          href="#"
          className="block rounded-xl px-5 py-4 hover:bg-slate-800 transition"
        >
          🤖 AI Assistant
        </a>

        <a
          href="#"
          className="block rounded-xl px-5 py-4 hover:bg-slate-800 transition"
        >
          📜 Trade History
        </a>

        <a
          href="#"
          className="block rounded-xl px-5 py-4 hover:bg-slate-800 transition"
        >
          ⚙️ Settings
        </a>

        <a
          href="#"
          className="block rounded-xl px-5 py-4 hover:bg-red-600 transition"
        >
          🚪 Logout
        </a>

      </nav>

    </aside>
  );
}