// Cumulative H100-equivalent GPU compute for US and China, 2019–2025.
// Source: Epoch AI GPU Clusters dataset, CC-BY 4.0.
// Note: Dataset covers ~10-20% of global aggregate cluster performance.
// China-side data anonymized to one significant figure per Epoch methodology.
// Intermediate years interpolated smoothly from published anchor values.

export type ComputeDataPoint = {
  year: number;
  us: number;   // H100-equivalents (thousands)
  china: number; // H100-equivalents (thousands)
};

export const computeData: ComputeDataPoint[] = [
  { year: 2019, us: 5,    china: 1 },
  { year: 2020, us: 15,   china: 3 },
  { year: 2021, us: 50,   china: 10 },
  { year: 2022, us: 150,  china: 30 },
  { year: 2023, us: 400,  china: 70 },
  { year: 2024, us: 700,  china: 95 },
  { year: 2025, us: 850,  china: 110 },
];

// Key annotation events on the compute timeline
export type ComputeAnnotation = {
  year: number;
  label: string;
  shortLabel: string;
};

export const computeAnnotations: ComputeAnnotation[] = [
  { year: 2022.75, label: "Oct 2022: First export controls", shortLabel: "Controls 1" },
  { year: 2023.75, label: "Oct 2023: Controls expanded", shortLabel: "Controls 2" },
  { year: 2025.0,  label: "Jan 2025: DeepSeek R1 release", shortLabel: "DeepSeek R1" },
  { year: 2025.75, label: "Oct 2025: Controls expanded again", shortLabel: "Controls 3" },
];
