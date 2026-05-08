"use client";

// Panel 3: The Capex Paradox — two horizontal bar comparison.
// Investment gap: US 23.1x larger than China.
// Performance gap: US 2.7pp ahead.
// The visual asymmetry between the two bars is the point.

import { capexData, chinaGovernmentContext } from "@/data/capex";

// A single horizontal bar comparison row.
// The US bar fills proportionally based on the ratio;
// the China bar fills the remainder up to China's proportion.
type BarRowProps = {
  label: string;
  usLabel: string;
  chinaLabel: string;
  usWidth: number;   // percentage of the full bar width (0-100)
  chinaWidth: number; // percentage of the full bar width (0-100)
};

function BarRow({ label, usLabel, chinaLabel, usWidth, chinaWidth }: BarRowProps) {
  return (
    <div className="mb-8">
      {/* Row label */}
      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
        {label}
      </p>

      {/* US bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-blue-400 font-medium">United States</span>
          <span className="text-xs text-blue-400 font-bold">{usLabel}</span>
        </div>
        <div className="h-8 bg-gray-800 rounded-lg overflow-hidden">
          <div
            className="h-full bg-blue-700 rounded-lg flex items-center justify-end pr-3 transition-all duration-500"
            style={{ width: `${usWidth}%` }}
          >
            {usWidth > 20 && (
              <span className="text-white text-xs font-bold">{usLabel}</span>
            )}
          </div>
        </div>
      </div>

      {/* China bar */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-red-400 font-medium">China</span>
          <span className="text-xs text-red-400 font-bold">{chinaLabel}</span>
        </div>
        <div className="h-8 bg-gray-800 rounded-lg overflow-hidden">
          <div
            className="h-full bg-red-700 rounded-lg flex items-center justify-end pr-3 transition-all duration-500"
            style={{ width: `${chinaWidth}%` }}
          >
            {chinaWidth > 15 && (
              <span className="text-white text-xs font-bold">{chinaLabel}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CapexPanel() {
  const { usInvestmentBillions, chinaInvestmentBillions, performanceGapPP, investmentRatio } =
    capexData;

  // For the investment bar: US is 23.1x China.
  // We set US to 95% width so there's a little visual breathing room,
  // and China scales to 95/23.1 ≈ 4.1%.
  const usInvestmentWidth = 95;
  const chinaInvestmentWidth = usInvestmentWidth / investmentRatio; // ~4.1%

  // For the performance bar: US leads by 2.7pp out of ~35pp max range.
  // We show the lead relative to a 35pp maximum (the starting gap in Q1 2023).
  // US bar = full bar (100%), China bar = 100% minus the 2.7/35 fraction.
  // This makes the visual contrast with the investment bar clear.
  const maxPerformanceRange = 35;
  const usPerformanceWidth = 95;
  const chinaPerformanceWidth = usPerformanceWidth - (performanceGapPP / maxPerformanceRange) * usPerformanceWidth;

  return (
    <section className="bg-gray-950 border-b border-gray-800 px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3">
          Panel 3 — Investment vs Output
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          The Capex Paradox
        </h2>

        {/* Headline stat */}
        <div className="mb-10">
          <p className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
            $285.9B for a 2.7% lead
          </p>
          <p className="text-lg font-semibold text-gray-300">
            US private AI investment in 2025 was {investmentRatio}× larger than China&rsquo;s $
            {chinaInvestmentBillions}B — for a model performance lead of just {performanceGapPP}{" "}
            percentage points
          </p>
        </div>

        {/* Visualization: two horizontal bar rows */}
        <div className="bg-gray-900 rounded-xl p-6 md:p-8 mb-6">
          <BarRow
            label="Investment Gap (2025 private AI investment)"
            usLabel={`$${usInvestmentBillions}B`}
            chinaLabel={`$${chinaInvestmentBillions}B`}
            usWidth={usInvestmentWidth}
            chinaWidth={chinaInvestmentWidth}
          />

          <BarRow
            label="Performance Gap (Arena Elo points ahead)"
            usLabel={`+${performanceGapPP}pp`}
            chinaLabel="~0"
            usWidth={usPerformanceWidth}
            chinaWidth={chinaPerformanceWidth}
          />

          {/* Visual callout explaining the asymmetry */}
          <div className="mt-4 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 leading-relaxed text-center">
              The investment gap is{" "}
              <span className="text-white font-bold">{investmentRatio}× wider</span> than
              the performance gap suggests.
            </p>
          </div>
        </div>

        {/* Caveat box */}
        <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-5 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
            Important caveat
          </p>
          <p className="text-sm text-amber-200/80 leading-relaxed">
            Stanford notes that comparisons based solely on private investment likely understate
            China&rsquo;s total spending. Chinese government guidance funds have deployed an estimated{" "}
            <strong>${chinaGovernmentContext.guidanceFundsTotalBillions}B</strong> into AI firms
            since 2000, plus a new{" "}
            <strong>${chinaGovernmentContext.newStateFundAnnounced2025Billions}B</strong> state VC
            fund announced in 2025. Including these figures would substantially narrow the apparent
            investment gap.
          </p>
        </div>

        {/* Source citation */}
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          Source: Stanford AI Index 2026 Report, Chapter 4 (Economy/Investment).
        </p>

        {/* Interpretation */}
        <p className="text-base text-gray-300 leading-relaxed">
          If capability tracks investment, the US lead should be orders of magnitude larger than
          2.7 percentage points. The fact that it&rsquo;s not is either a sign that China&rsquo;s
          efficiency is remarkable, that the private investment figures miss a large share of Chinese
          spending, or both. The Stanford AI Index flags this as an open methodological question.
        </p>
      </div>
    </section>
  );
}
