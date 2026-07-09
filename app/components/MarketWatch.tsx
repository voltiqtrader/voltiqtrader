export default function MarketWatch() {
  return (
    <section className="bg-slate-900 py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Live <span className="text-cyan-400">Markets</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Track popular markets in one place.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-700">

          <table className="w-full text-left">

            <thead className="bg-slate-800">
              <tr>
                <th className="p-5">Market</th>
                <th className="p-5">Price</th>
                <th className="p-5">Change</th>
                <th className="p-5">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t border-slate-700 hover:bg-slate-800 transition">
                <td className="p-5 font-semibold">EUR/USD</td>
                <td className="p-5">1.1842</td>
                <td className="p-5 text-green-400">+0.54%</td>
                <td className="p-5">
                  <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                    BUY
                  </span>
                </td>
              </tr>

              <tr className="border-t border-slate-700 hover:bg-slate-800 transition">
                <td className="p-5 font-semibold">BTC/USD</td>
                <td className="p-5">$117,450</td>
                <td className="p-5 text-red-400">-1.21%</td>
                <td className="p-5">
                  <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
                    SELL
                  </span>
                </td>
              </tr>

              <tr className="border-t border-slate-700 hover:bg-slate-800 transition">
                <td className="p-5 font-semibold">Gold</td>
                <td className="p-5">$3,340</td>
                <td className="p-5 text-green-400">+0.82%</td>
                <td className="p-5">
                  <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                    BUY
                  </span>
                </td>
              </tr>

              <tr className="border-t border-slate-700 hover:bg-slate-800 transition">
                <td className="p-5 font-semibold">Volatility 75</td>
                <td className="p-5">4562.83</td>
                <td className="p-5 text-green-400">+2.45%</td>
                <td className="p-5">
                  <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                    BUY
                  </span>
                </td>
              </tr>

              <tr className="border-t border-slate-700 hover:bg-slate-800 transition">
                <td className="p-5 font-semibold">Boom 1000</td>
                <td className="p-5">1254.12</td>
                <td className="p-5 text-red-400">-0.83%</td>
                <td className="p-5">
                  <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
                    SELL
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}