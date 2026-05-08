// Hero section: title, subtitle, framing paragraph, last updated date.

export default function Hero() {
  const lastUpdated = "May 8, 2026";

  return (
    <section className="bg-gray-950 border-b border-gray-800 px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Last updated badge */}
        <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-6">
          Last updated: {lastUpdated}
        </p>

        {/* Main title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          US vs China:{" "}
          <span className="text-blue-400">The AI Race</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-medium text-gray-300 mb-8 leading-snug">
          Three metrics that explain who&rsquo;s winning and why
        </p>

        {/* Framing paragraph */}
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">
          The United States leads China in AI capability by most measures. But the story is more
          complicated than raw spending or chip counts suggest. This dashboard tracks three
          dimensions — compute inputs, model performance, and the relationship between investment
          and results — to give a clear-eyed view of where the race actually stands.
        </p>

        {/* Visual divider */}
        <div className="mt-12 flex gap-3 items-center">
          <div className="w-10 h-1 bg-blue-600 rounded" />
          <div className="w-10 h-1 bg-red-600 rounded" />
          <span className="text-gray-600 text-sm ml-1">Three panels below</span>
        </div>
      </div>
    </section>
  );
}
