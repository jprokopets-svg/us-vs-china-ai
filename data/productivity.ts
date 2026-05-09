// Projected and realized cumulative TFP (total factor productivity) gains
// attributable to AI, 2023–2030, measured in percentage points.
//
// Three projections all start at 0 in 2023 and fan out linearly to their
// 2030 endpoints. One realized data point from BLS multifactor productivity data.

export type ProductivityDataPoint = {
  year: number;
  bull: number;         // BCG/McKinsey bull case: 3.0pp by 2030
  middle: number;       // Goldman Sachs base case: 1.75pp by 2030
  conservative: number; // Bick, Blandin & Deming (NBER): 1.0pp by 2030
};

// Linear interpolation from 0 (2023) to each endpoint (2030) over 7 steps.
// Values rounded to two decimal places.
export const productivityData: ProductivityDataPoint[] = [
  { year: 2023, bull: 0,    middle: 0,    conservative: 0    },
  { year: 2024, bull: 0.43, middle: 0.25, conservative: 0.14 },
  { year: 2025, bull: 0.86, middle: 0.50, conservative: 0.29 },
  { year: 2026, bull: 1.29, middle: 0.75, conservative: 0.43 },
  { year: 2027, bull: 1.71, middle: 1.00, conservative: 0.57 },
  { year: 2028, bull: 2.14, middle: 1.25, conservative: 0.71 },
  { year: 2029, bull: 2.57, middle: 1.50, conservative: 0.86 },
  { year: 2030, bull: 3.00, middle: 1.75, conservative: 1.00 },
];

// The single realized data point from BLS multifactor productivity data.
// Represents the portion of TFP growth attributable to AI inputs,
// statistically indistinguishable from zero as of May 2026.
export const blsRealized = {
  year: 2026,
  value: 0.1,           // percentage points; within the noise band
  label: "BLS, ~0%",
};

// Projection sources for citation
export const projectionSources = [
  "Bick, Blandin & Deming, NBER Working Paper (2024, updated 2026)",
  "Goldman Sachs Top of Mind (2024–2026)",
  "McKinsey Global Institute, Economic Potential of Generative AI (2023)",
  "BLS Multifactor Productivity series",
  "Brynjolfsson et al., Stanford Digital Economy Lab",
];
