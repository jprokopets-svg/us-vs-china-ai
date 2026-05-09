export default function Methodology() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-normal mb-6">Methodology</h2>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <div>
          <p className="font-normal text-black mb-1">Compute</p>
          <p>
            Epoch AI GPU Clusters dataset (CC-BY 4.0), accessed March 2025. Covers ~10–20% of
            global cluster performance; China-side figures rounded to one significant figure.
            Classified government compute, smaller clusters, and non-AI company workloads are not
            included. The 7–8× figure is indicative, not precise.
          </p>
        </div>

        <div>
          <p className="font-normal text-black mb-1">Capability</p>
          <p>
            Stanford AI Index 2026 Report (Chapter 1) and Arena leaderboard (lmarena.ai), March
            2026. Arena Elo reflects human preference on open-ended tasks — it does not capture
            specialized domains, multimodal performance, or agentic capability. Quarterly values
            interpolated from annual index figures.
          </p>
        </div>

        <div>
          <p className="font-normal text-black mb-1">Investment</p>
          <p>
            Stanford AI Index 2026, Chapter 4. Figures are disclosed private capital only (Quid /
            NetBase Quid). Chinese government guidance funds (~$184B deployed since 2000) and the
            $138B state VC fund announced in 2025 are excluded. The 23.1× ratio shrinks
            substantially if those are included.
          </p>
        </div>

        <div>
          <p className="font-normal text-black mb-1">Productivity</p>
          <p>
            Projections are linear extrapolations from published range estimates: BCG/McKinsey
            (3.0pp by 2030), Goldman Sachs Top of Mind (1.75pp), and Bick, Blandin & Deming NBER
            WP 2024/2026 (1.0pp). The realized data point is from BLS Multifactor Productivity
            series; the AI-attributable portion is estimated, not directly measured, and is within
            the statistical noise band. The $1.6T investment figure aggregates CB Insights and
            Stanford AI Index annual investment data from 2013–2025.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400">
          <a href="https://github.com/jprokopets-svg/us-vs-china-ai" className="underline underline-offset-2 hover:text-black transition-colors">
            Source on GitHub
          </a>
          <a href="https://aiindex.stanford.edu" className="underline underline-offset-2 hover:text-black transition-colors">
            Stanford AI Index 2026
          </a>
          <a href="https://epochai.org" className="underline underline-offset-2 hover:text-black transition-colors">
            Epoch AI
          </a>
          <a href="https://lmarena.ai" className="underline underline-offset-2 hover:text-black transition-colors">
            Arena Leaderboard
          </a>
        </div>
      </div>
    </section>
  );
}
