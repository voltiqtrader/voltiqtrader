export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Trading Assistant",
      description:
        "Receive intelligent market insights and trading suggestions powered by AI.",
    },
    {
      icon: "📈",
      title: "Live Analytics",
      description:
        "Track market trends with real-time charts and trading statistics.",
    },
    {
      icon: "🔒",
      title: "Secure Deriv Connection",
      description:
        "Safely connect your Deriv account using secure authentication.",
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description:
        "Experience lightning-fast trading tools built for speed and reliability.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Why Choose
          <span className="text-cyan-400"> VoltiqTrader?</span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Everything you need to trade smarter, analyze faster, and grow your trading confidence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
className="
rounded-2xl
bg-slate-800
p-8
transition-all
duration-300
hover:-translate-y-3
hover:scale-105
hover:bg-slate-700
hover:shadow-2xl
hover:shadow-cyan-500/20
cursor-pointer
"            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}