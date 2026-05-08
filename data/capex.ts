// Investment and performance comparison: US vs China, 2025.
// Source: Stanford AI Index 2026 Report, Chapter 4 (Economy/Investment).

export type CapexData = {
  usInvestmentBillions: number;       // US private AI investment in 2025 (USD billions)
  chinaInvestmentBillions: number;    // China private AI investment in 2025 (USD billions)
  performanceGapPP: number;           // US model lead over China in percentage points (Arena Elo gap)
  investmentRatio: number;            // How many times larger US investment is vs China
};

export const capexData: CapexData = {
  usInvestmentBillions: 285.9,
  chinaInvestmentBillions: 12.4,
  performanceGapPP: 2.7,
  investmentRatio: 23.1,
};

// Additional context on Chinese government spending that Stanford flags
// as likely understating total China AI investment
export const chinaGovernmentContext = {
  guidanceFundsTotalBillions: 184,      // Deployed into AI firms since 2000
  newStateFundAnnounced2025Billions: 138, // New state VC fund announced in 2025
};
