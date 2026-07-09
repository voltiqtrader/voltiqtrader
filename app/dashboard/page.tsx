import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          VoltiqTrader
        </h1>

        <p className="text-gray-400 mb-8">
          Professional Third-Party Trading Platform for Deriv
        </p>

        <LoginButton />
      </div>
    </main>
  );
}