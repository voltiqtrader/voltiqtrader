export default function AccountPanel() {
  return (
    <section className="bg-slate-950 py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Your <span className="text-cyan-400">Trading Account</span>
        </h2>

        <p className="text-center text-gray-400 mt-6">
          Securely manage your Deriv account from one dashboard.
        </p>

        <div className="mt-16 rounded-3xl bg-slate-900 border border-slate-800 p-10">

          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* Profile */}

            <div className="flex items-center gap-6">

              <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-3xl">
                👤
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Demo Trader
                </h3>

                <p className="text-gray-400">
                  CR1234567
                </p>

              </div>

            </div>

            {/* Status */}

            <div className="mt-8 md:mt-0">

              <span className="bg-green-500/20 text-green-400 px-5 py-2 rounded-full">
                ● Connected
              </span>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <p className="text-gray-400">
                Balance
              </p>

              <h3 className="text-4xl font-bold text-cyan-400 mt-2">
                $12,540
              </h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <p className="text-gray-400">
                Currency
              </p>

              <h3 className="text-4xl font-bold mt-2">
                USD
              </h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <p className="text-gray-400">
                Account Type
              </p>

              <h3 className="text-4xl font-bold mt-2">
                Demo
              </h3>
            </div>

          </div>

          <div className="mt-10 flex justify-center">

            <button className="rounded-xl bg-cyan-500 px-10 py-4 text-lg font-bold hover:bg-cyan-600 transition-all duration-300 hover:scale-105">
              Connect Deriv Account
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}