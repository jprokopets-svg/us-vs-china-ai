// Methodology section: explains data sources, versions, and limitations for each panel.

export default function Methodology() {
  return (
    <section className="bg-gray-900 border-b border-gray-800 px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Methodology & Limitations
        </h2>
        <p className="text-gray-400 text-base mb-10">
          What each panel measures, where the data comes from, and what it doesn&rsquo;t tell you.
        </p>

        {/* Panel-by-panel breakdown */}
        <div className="space-y-10">
          {/* Panel 1 methodology */}
          <div className="border-l-2 border-blue-700 pl-6">
            <h3 className="text-lg font-bold text-white mb-2">Panel 1: Compute</h3>
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
              <p>
                <span className="text-gray-200 font-medium">Source:</span> Epoch AI GPU Clusters
                dataset (CC-BY 4.0), accessed March 2025. The dataset tracks large compute clusters
                reported in public news, company filings, and research papers.
              </p>
              <p>
                <span className="text-gray-200 font-medium">Coverage:</span> Epoch estimates their
                dataset captures ~10–20% of global aggregate cluster performance. Numbers should be
                read as indicative of relative scale, not precise totals.
              </p>
              <p>
                <span className="text-gray-200 font-medium">China data:</span> Epoch rounds
                China-side figures to one significant figure as part of their methodology, given
                lower data quality and fewer public disclosures. The 110K figure is a rounded estimate.
              </p>
              <p>
                <span className="text-gray-200 font-medium">What it doesn&rsquo;t capture:</span> Classified
                government compute, smaller clusters, and compute held by non-AI companies for AI
                workloads. The true compute gap may be larger or smaller than the 7–8× figure.
              </p>
            </div>
          </div>

          {/* Panel 2 methodology */}
          <div className="border-l-2 border-blue-700 pl-6">
            <h3 className="text-lg font-bold text-white mb-2">Panel 2: Capability</h3>
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
              <p>
                <span className="text-gray-200 font-medium">Source:</span> Stanford AI Index 2026
                Report (Chapter 1); Arena leaderboard (lmarena.ai) Elo ratings, current as of
                March 2026. The AI Index aggregates Arena data with additional benchmarks.
              </p>
              <p>
                <span className="text-gray-200 font-medium">What Arena Elo measures:</span> Human
                preference in head-to-head model comparisons on open-ended tasks. It is a good proxy
                for general conversational and reasoning quality, but does not capture specialized
                domains like code, math, or science independently.
              </p>
              <p>
                <span className="text-gray-200 font-medium">What it doesn&rsquo;t capture:</span> Closed
                enterprise benchmarks, multimodal capability, agentic task performance, or
                safety/alignment properties. China&rsquo;s lead in certain specialized areas (e.g.
                materials science, protein folding) may not be reflected in the Elo gap.
              </p>
              <p>
                <span className="text-gray-200 font-medium">Quarterly data:</span> Intermediate
                quarter values are interpolated from the annual figures in the Stanford AI Index.
                Treat as approximate trend lines, not exact measurements.
              </p>
            </div>
          </div>

          {/* Panel 3 methodology */}
          <div className="border-l-2 border-blue-700 pl-6">
            <h3 className="text-lg font-bold text-white mb-2">Panel 3: The Capex Paradox</h3>
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
              <p>
                <span className="text-gray-200 font-medium">Source:</span> Stanford AI Index 2026
                Report, Chapter 4 (Economy/Investment). Investment figures sourced from Quid and
                NetBase Quid databases.
              </p>
              <p>
                <span className="text-gray-200 font-medium">Private investment only:</span> The
                $285.9B (US) and $12.4B (China) figures track disclosed private capital investment
                in AI companies. They exclude government R&D spending, defense budgets, and state
                guidance funds.
              </p>
              <p>
                <span className="text-gray-200 font-medium">The undercount problem:</span> China&rsquo;s
                disclosed private investment almost certainly undercounts total AI spending. The AI
                Index estimates ~$184B in government guidance fund deployment since 2000 and flags a
                new $138B state VC fund announced in 2025. Including these figures would narrow the
                23.1× ratio substantially.
              </p>
              <p>
                <span className="text-gray-200 font-medium">The inference:</span> The 23.1× investment
                gap vs 2.7pp performance gap is a genuine paradox only if private investment is the
                right denominator. If China&rsquo;s true spending is 3–5× higher than captured, the
                paradox partly resolves.
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/jakeprokopets/us-vs-china-ai"
            className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            View source on GitHub →
          </a>
          <a
            href="https://aiindex.stanford.edu"
            className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            Stanford AI Index 2026 →
          </a>
          <a
            href="https://epochai.org"
            className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            Epoch AI →
          </a>
          <a
            href="https://lmarena.ai"
            className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            Arena Leaderboard →
          </a>
        </div>
      </div>
    </section>
  );
}
