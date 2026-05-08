"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Label,
} from "recharts";
import { computeData } from "@/data/compute";

// Recharts tooltip and label props — typed to avoid @typescript-eslint/no-explicit-any
type TooltipProps = {
  active?: boolean;
  payload?: Array<{ name: string; value: number }>;
  label?: string | number;
};

type LineLabelProps = {
  x?: string | number;
  y?: string | number;
  index?: number;
};

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div style={{ fontFamily: "Georgia, serif", fontSize: 12, background: "#fff", border: "1px solid #e5e7eb", padding: "8px 12px" }}>
      <div style={{ color: "#6b7280", marginBottom: 4 }}>{label}</div>
      {payload.map((entry) => (
        <div key={entry.name}>
          {entry.name}: {entry.value.toLocaleString()}K H100-eq
        </div>
      ))}
    </div>
  );
}

// Renders a text label only at the last data point of a line
function makeEndLabel(text: string) {
  const dataLength = computeData.length;
  return function EndLabel({ x, y, index }: LineLabelProps) {
    if (index !== dataLength - 1) return null;
    return (
      <text
        x={Number(x ?? 0) + 8}
        y={Number(y ?? 0) + 4}
        fontSize={11}
        fill="#374151"
        fontFamily="Georgia, serif"
      >
        {text}
      </text>
    );
  };
}

function formatCompute(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}M`;
  return `${value}K`;
}

const tickStyle = { fontFamily: "Georgia, serif", fontSize: 11, fill: "#9ca3af" };

export default function ComputePanel() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-normal mb-1">Compute: The Inputs</h2>
      <p className="text-gray-500 text-sm mb-2">
        US has roughly 7–8× more captured AI compute than China.
      </p>
      <p className="text-gray-400 text-xs mb-6">
        850,000 H100-equivalents (US) vs 110,000 (China) — Epoch AI, March 2025
      </p>

      {/* Chart: log-scale time series, right margin gives room for inline labels */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={computeData}
          margin={{ top: 10, right: 72, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={tickStyle}
          />
          <YAxis
            scale="log"
            domain={[1, 1200]}
            axisLine={false}
            tickLine={false}
            tick={tickStyle}
            tickFormatter={formatCompute}
            tickCount={5}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Policy event annotations */}
          <ReferenceLine x={2022} stroke="#e5e7eb" strokeDasharray="3 3">
            <Label value="2022 controls" position="top" fill="#d1d5db" fontSize={9} fontFamily="Georgia, serif" />
          </ReferenceLine>
          <ReferenceLine x={2023} stroke="#e5e7eb" strokeDasharray="3 3">
            <Label value="2023 controls" position="top" fill="#d1d5db" fontSize={9} fontFamily="Georgia, serif" />
          </ReferenceLine>
          <ReferenceLine x={2025} stroke="#d1d5db" strokeDasharray="3 3">
            <Label value="DeepSeek R1" position="top" fill="#9ca3af" fontSize={9} fontFamily="Georgia, serif" />
          </ReferenceLine>

          {/* US — solid black line */}
          <Line
            type="monotone"
            dataKey="us"
            name="United States"
            stroke="#111111"
            strokeWidth={1.5}
            dot={false}
            label={makeEndLabel("United States")}
          />
          {/* China — dashed black line */}
          <Line
            type="monotone"
            dataKey="china"
            name="China"
            stroke="#111111"
            strokeWidth={1.5}
            strokeDasharray="5 3"
            dot={false}
            label={makeEndLabel("China")}
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Source: Epoch AI GPU Clusters dataset, CC-BY 4.0. Covers ~10–20% of global cluster
        performance. China-side data rounded to one significant figure per Epoch&rsquo;s methodology.
      </p>
    </section>
  );
}
