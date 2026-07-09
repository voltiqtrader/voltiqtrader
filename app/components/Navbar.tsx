export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800">
      <h1 className="text-3xl font-bold text-cyan-400">
        VoltiqTrader
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#" className="hover:text-cyan-400">Features</a>
        <a href="#" className="hover:text-cyan-400">About</a>
        <a href="#" className="hover:text-cyan-400">Contact</a>
        <a href="#" className="hover:text-cyan-400">Login</a>
      </div>
    </nav>
  );
}