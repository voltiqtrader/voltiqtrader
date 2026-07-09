import TradingChart from "./TradingChart";
export default function DashboardPreview() {
    return (
        <section className="bg-slate-950 py-24 px-8">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-center">
                    Dashboard <span className="text-cyan-400">Preview</span>
                </h2>

                <p className="text-center text-gray-400 mt-6">
                    Everything you need to monitor your trading performance.
                </p>

                <div className="mt-16 rounded-3xl bg-slate-900 p-10 border border-slate-800">

                    <div className="grid md:grid-cols-4 gap-6">

                        <div className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                            <p className="text-gray-400">Account Balance</p>
                            <h3 className="text-3xl font-bold text-cyan-400 mt-2">
                                $12,540
                            </h3>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                            <p className="text-gray-400">Today's Profit</p>
                            <h3 className="text-3xl font-bold text-green-400 mt-2">
                                +$845
                            </h3>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                            <p className="text-gray-400">Win Rate</p>
                            <h3 className="text-3xl font-bold text-yellow-400 mt-2">
                                84%
                            </h3>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                            <p className="text-gray-400">Active Trades</p>
                            <h3 className="text-3xl font-bold text-purple-400 mt-2">
                                7
                            </h3>
                        </div>

                    </div>

                    <TradingChart />

                </div>

            </div>
        </section>
    );
}