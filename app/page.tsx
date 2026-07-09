import AccountPanel from "./components/AccountPanel";
import MarketWatch from "./components/MarketWatch";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <MarketWatch />
      <AccountPanel />
    </main>
  );
}