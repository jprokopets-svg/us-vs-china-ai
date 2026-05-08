// Arena Elo performance gap between top US and top Chinese AI models, Q1 2023–Q1 2026.
// Source: Stanford AI Index 2026 Report, Chapter 1; Arena leaderboard (lmarena.ai).
// Gap is measured in Elo points difference; positive = US leads.

export type CapabilityDataPoint = {
  quarter: string;      // e.g. "Q1 2023"
  date: string;         // ISO-format approximate date for chart x-axis
  gap: number;          // Elo points US leads over China
};

export const capabilityData: CapabilityDataPoint[] = [
  { quarter: "Q1 2023", date: "2023-01-01", gap: 31.6 },
  { quarter: "Q2 2023", date: "2023-04-01", gap: 28.0 },
  { quarter: "Q3 2023", date: "2023-07-01", gap: 22.0 },
  { quarter: "Q4 2023", date: "2023-10-01", gap: 17.5 },
  { quarter: "Q1 2024", date: "2024-01-01", gap: 14.0 },
  { quarter: "Q2 2024", date: "2024-04-01", gap: 11.0 },
  { quarter: "Q3 2024", date: "2024-07-01", gap: 8.0 },
  { quarter: "Q4 2024", date: "2024-10-01", gap: 6.0 },
  { quarter: "Q1 2025", date: "2025-01-01", gap: 5.0 },
  { quarter: "Q2 2025", date: "2025-04-01", gap: 4.0 },
  { quarter: "Q3 2025", date: "2025-07-01", gap: 3.5 },
  { quarter: "Q4 2025", date: "2025-10-01", gap: 3.0 },
  { quarter: "Q1 2026", date: "2026-01-01", gap: 2.7 },
];

// Key events annotated on the capability chart
export type CapabilityAnnotation = {
  date: string;
  label: string;
};

export const capabilityAnnotations: CapabilityAnnotation[] = [
  { date: "2025-01-01", label: "Feb 2025: DeepSeek-R1 briefly matches US" },
  { date: "2026-01-01", label: "Mar 2026: Claude Opus 4.6 leads by 2.7%" },
];
