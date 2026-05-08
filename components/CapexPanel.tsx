"use client";

// Panel 3: The Capex Paradox.
// Two rows of horizontal bars: investment gap (wildly asymmetric) vs
// performance gap (nearly equal). The visual contrast between the rows is the point.

import { capexData, chinaGovernmentContext } from "@/data/capex";

type BarRowProps = {
  heading: string;
  usValue: string;
  chinaValue: string;
  usWidthPercent: number;
  chinaWidthPercent: number;
};

function BarRow({ heading, usValue, chinaValue, usWidthPercent, chinaWidthPercent }: BarRowProps) {
  return (
    <div className="mb-8">
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">{heading}</p>
      <div className="space-y-2">
        {/* US bar */}
        <div className="flex items-center gap-3">
          <span className="text-sm w-28 shrink-0">United States</span>
          <div className="flex-1 flex items-center gap-2">
            <div
              className="h-2 bg-black"
              style={{ width: `${usWidthPercent}%` }}
            />
            <span className="text-xs text-gray-500">{usValue}</span>
          </div>
        </div>
        {/* China bar */}
        <div className="flex items-center gap-3">
          <span className="text-sm w-28 shrink-0">China</span>
          <div className="flex-1 flex items-center gap-2">
            <div
              className="h-2 bg-black"
              style={{ width: `${chinaWidthPercent}%` }}
            />
            <span className="text-xs text-gray-500">{chinaValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CapexPanel() {
  const { usInvestmentBillions, chinaInvestmentBillions, performanceGapPP, investmentRatio } =
    capexData;

  // Investment bars: US is 23.1× China. US = 95%, China ≈ 4%.
  const usInvestmentWidth = 95;
  const chinaInvestmentWidth = usInvestmentWidth / investmentRatio;

  // Performance bars: US leads by 2.7pp on a 0–35pp scale.
  // Both bars are nearly equal — that's the point.
  const usPerformanceWidth = 95;
  const chinaPerformanceWidth = usPerformanceWidth * (1 - performanceGapPP / 35);

  return (
    <section className="py-12">
      <h2 className="text-xl font-normal mb-1">The Capex Paradox</h2>
      <p className="text-gray-500 text-sm mb-2">
        $285.9B for a 2.7-point lead.
      </p>
      <p className="text-gray-400 text-xs mb-8">
        US private AI investment in 2025 was {investmentRatio}× larger than China&rsquo;s ${chinaInvestmentBillions}B —
        for a model performance lead of just {performanceGapPP} percentage points.
      </p>

      {/* The two bar rows */}
      <BarRow
        heading="Private AI investment, 2025"
        usValue={`$${usInvestmentBillions}B`}
        chinaValue={`$${chinaInvestmentBillions}B`}
        usWidthPercent={usInvestmentWidth}
        chinaWidthPercent={chinaInvestmentWidth}
      />
      <BarRow
        heading="Model performance gap (Arena Elo, Q1 2026)"
        usValue="top"
        chinaValue={`${performanceGapPP}pp behind`}
        usWidthPercent={usPerformanceWidth}
        chinaWidthPercent={chinaPerformanceWidth}
      />

      {/* Caveat — plain text, no box */}
      <p className="text-xs text-gray-400 leading-relaxed mt-2 mb-6">
        Note: Private investment likely understates China&rsquo;s total. Government guidance funds
        have deployed ~${chinaGovernmentContext.guidanceFundsTotalBillions}B into AI since 2000,
        plus a new ${chinaGovernmentContext.newStateFundAnnounced2025Billions}B state VC fund
        announced in 2025.
      </p>

      <p className="text-xs text-gray-400 leading-relaxed">
        Source: Stanford AI Index 2026 Report, Chapter 4 (Economy/Investment).
      </p>
    </section>
  );
}
