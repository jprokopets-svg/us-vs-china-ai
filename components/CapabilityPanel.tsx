"use client";

// Panel 2: Capability — line chart of Arena Elo gap (US lead over China) over time.
// Shows how quickly the performance gap has closed since 2023.

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
import { capabilityData } from "@/data/capability";

// Recharts tooltip props — typed explicitly to avoid @typescript-eslint/no-explicit-any
type TooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number; payload: { quarter: string } }>;
};

// Custom tooltip for the capability chart
function CustomTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const point = payload[0];
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm shadow-xl">
      <p className="text-gray-400 mb-1 font-medium">{point?.payload?.quarter}</p>
      <p className="text-blue-400 font-semibold">
        US leads by {point?.value} pts
      </p>
    </div>
  );
}

// Format x-axis tick labels: show only Q1 of each year for readability
function formatQuarterTick(value: string): string {
  if (value && value.startsWith("Q1")) {
    return value.replace("Q1 ", "'");
  }
  return "";
}

export default function CapabilityPanel() {
  return (
    <section className="bg-gray-900 border-b border-gray-800 px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3">
          Panel 2 — Capability
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Capability: The Gap Is Closing
        </h2>

        {/* Headline stat */}
        <div className="mb-8">
          <p className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
            2.7%
          </p>
          <p className="text-lg font-semibold text-gray-300">
            The performance gap between top US and Chinese AI models
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Down from 17.5–31.6 percentage points in May 2023
          </p>
        </div>

        {/* Chart */}
        <div className="bg-gray-950 rounded-xl p-4 md:p-6 mb-4">
          <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
            US lead over China — Arena Elo points gap (Q1 2023 → Q1 2026)
          </p>
          <ResponsiveContainer width="100%" height={360}>
            <LineChart
              data={capabilityData}
              margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

              <XAxis
                dataKey="quarter"
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#374151" }}
                tickFormatter={formatQuarterTick}
                interval={3}
              />

              <YAxis
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#374151" }}
                tickFormatter={(v: number) => `${v}pp`}
                domain={[0, 35]}
              />

              <Tooltip content={<CustomTooltip />} />

              {/* Reference line: DeepSeek-R1 moment */}
              <ReferenceLine
                x="Q1 2025"
                stroke="#f59e0b"
                strokeDasharray="4 4"
                strokeOpacity={0.8}
              >
                <Label
                  value="DeepSeek-R1"
                  position="insideTopRight"
                  fill="#f59e0b"
                  fontSize={10}
                  dy={-4}
                />
              </ReferenceLine>

              {/* Reference line: Claude Opus 4.6 latest reading */}
              <ReferenceLine
                x="Q1 2026"
                stroke="#3b82f6"
                strokeDasharray="4 4"
                strokeOpacity={0.8}
              >
                <Label
                  value="Claude 4.6 (2.7%)"
                  position="insideTopLeft"
                  fill="#3b82f6"
                  fontSize={10}
                  dy={-4}
                />
              </ReferenceLine>

              {/* Parity baseline */}
              <ReferenceLine y={0} stroke="#4b5563" strokeDasharray="2 2">
                <Label value="Parity" position="right" fill="#6b7280" fontSize={10} />
              </ReferenceLine>

              <Line
                type="monotone"
                dataKey="gap"
                name="US lead (Elo pts)"
                stroke="#1E40AF"
                strokeWidth={3}
                dot={{ fill: "#1E40AF", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Source citation */}
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          Source: Stanford AI Index 2026 Report, Chapter 1; Arena leaderboard (lmarena.ai), data
          current as of March 2026.
        </p>

        {/* Interpretation */}
        <p className="text-base text-gray-300 leading-relaxed">
          China has closed roughly 90% of the capability gap since early 2023, even as the US has
          continued to invest at 23× the rate. The pattern suggests that model capability is
          becoming harder to buy with raw compute spending alone — algorithmic efficiency and
          research talent matter at least as much.
        </p>
      </div>
    </section>
  );
}
