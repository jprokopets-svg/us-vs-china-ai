"use client";

// Panel 1: Compute — log-scale time series of US vs China H100-equivalent GPUs.
// Recharts is used for the chart; annotations are rendered as ReferenceLine overlays.

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Label,
} from "recharts";
import { computeData } from "@/data/compute";

// Recharts tooltip props — typed explicitly to avoid @typescript-eslint/no-explicit-any
type TooltipProps = {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string | number;
};

// Format large numbers with K/M suffix for y-axis labels
function formatCompute(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}M`;
  }
  return `${value}K`;
}

// Custom tooltip shown on hover
function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm shadow-xl">
      <p className="text-gray-400 mb-2 font-medium">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color }} className="font-semibold">
          {entry.name}: {entry.value.toLocaleString()}K H100-eq
        </p>
      ))}
    </div>
  );
}

export default function ComputePanel() {
  return (
    <section className="bg-gray-950 border-b border-gray-800 px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3">
          Panel 1 — Compute
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Compute: The Inputs
        </h2>

        {/* Headline stat */}
        <div className="mb-8">
          <p className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
            7–8×
          </p>
          <p className="text-lg font-semibold text-gray-300">
            US has roughly 7–8x more captured AI compute than China
          </p>
          <p className="text-sm text-gray-500 mt-1">
            850,000 H100-equivalents (US) vs 110,000 (China) — Epoch AI, March 2025
          </p>
        </div>

        {/* Chart */}
        <div className="bg-gray-900 rounded-xl p-4 md:p-6 mb-4">
          <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
            Cumulative H100-equivalent compute (thousands, log scale)
          </p>
          <ResponsiveContainer width="100%" height={360}>
            <LineChart
              data={computeData}
              margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

              <XAxis
                dataKey="year"
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#374151" }}
              />

              {/* Log-scale Y axis — shows the full spread without compressing low values */}
              <YAxis
                scale="log"
                domain={[1, 1200]}
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#374151" }}
                tickFormatter={formatCompute}
                tickCount={6}
              />

              <Tooltip content={<CustomTooltip />} />

              <Legend
                wrapperStyle={{ color: "#9ca3af", fontSize: "13px", paddingTop: "12px" }}
              />

              {/* Key policy event annotations as vertical reference lines */}
              <ReferenceLine
                x={2022}
                stroke="#6b7280"
                strokeDasharray="4 4"
                strokeOpacity={0.7}
              >
                <Label value="Controls '22" position="top" fill="#6b7280" fontSize={10} />
              </ReferenceLine>

              <ReferenceLine
                x={2023}
                stroke="#6b7280"
                strokeDasharray="4 4"
                strokeOpacity={0.7}
              >
                <Label value="Controls '23" position="top" fill="#6b7280" fontSize={10} />
              </ReferenceLine>

              <ReferenceLine
                x={2025}
                stroke="#f59e0b"
                strokeDasharray="4 4"
                strokeOpacity={0.8}
              >
                <Label value="DeepSeek R1" position="top" fill="#f59e0b" fontSize={10} />
              </ReferenceLine>

              {/* US line — blue */}
              <Line
                type="monotone"
                dataKey="us"
                name="United States"
                stroke="#1E40AF"
                strokeWidth={3}
                dot={{ fill: "#1E40AF", r: 4 }}
                activeDot={{ r: 6 }}
              />

              {/* China line — red */}
              <Line
                type="monotone"
                dataKey="china"
                name="China"
                stroke="#DC2626"
                strokeWidth={3}
                dot={{ fill: "#DC2626", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Source citation */}
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          Source: Epoch AI GPU Clusters dataset, CC-BY 4.0. Note: Dataset covers ~10–20% of global
          aggregate cluster performance; China-side data anonymized to one significant figure per
          Epoch&rsquo;s methodology.
        </p>

        {/* Interpretation */}
        <p className="text-base text-gray-300 leading-relaxed">
          The compute gap between the US and China widened substantially after 2022 export controls
          restricted China&rsquo;s access to advanced NVIDIA GPUs. Despite restrictions, China continued to
          accumulate compute through alternative channels, but the US lead has held steady at
          roughly 7–8× as of early 2025.
        </p>
      </div>
    </section>
  );
}
