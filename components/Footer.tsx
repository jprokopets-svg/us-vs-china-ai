// Site footer: attribution, links, data sources.

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Attribution */}
          <div>
            <p className="text-gray-300 font-medium text-sm">Built by Jake Prokopets</p>
            <p className="text-gray-600 text-xs mt-1">
              Data current as of May 2026. Updated monthly.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="https://twitter.com/jakeprokopets"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/jakeprokopets/us-vs-china-ai"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Data sources */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-600 leading-relaxed">
            Data sources:{" "}
            <a href="https://epochai.org" className="text-gray-500 hover:text-gray-300 transition-colors">
              Epoch AI GPU Clusters dataset (CC-BY 4.0)
            </a>
            {" · "}
            <a href="https://aiindex.stanford.edu" className="text-gray-500 hover:text-gray-300 transition-colors">
              Stanford AI Index 2026
            </a>
            {" · "}
            <a href="https://lmarena.ai" className="text-gray-500 hover:text-gray-300 transition-colors">
              Arena Leaderboard (lmarena.ai)
            </a>
          </p>
          <p className="text-xs text-gray-700 mt-3">
            Not financial or policy advice. All figures are approximations from public data sources.
            See Methodology section for limitations.
          </p>
        </div>
      </div>
    </footer>
  );
}
