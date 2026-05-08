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
import { capabilityData } from "@/data/capability";

type TooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number; payload: { quarter: string } }>;
};

function CustomTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div style={{ fontFamily: "Georgia, serif", fontSize: 12, background: "#fff", border: "1px solid #e5e7eb", padding: "8px 12px" }}>
      <div style={{ color: "#6b7280", marginBottom: 2 }}>{payload[0]?.payload?.quarter}</div>
      <div>US leads by {payload[0]?.value}pp</div>
    </div>
  );
}

// Show quarter label only at Q1 of each year to reduce clutter
function formatTick(value: string): string {
  return value?.startsWith("Q1") ? value.replace("Q1 ", "") : "";
}

const tickStyle = { fontFamily: "Georgia, serif", fontSize: 11, fill: "#9ca3af" };

export default function CapabilityPanel() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-normal mb-1">Capability: The Gap Is Closing</h2>
      <p className="text-gray-500 text-sm mb-2">
        The performance gap between top US and Chinese models is now 2.7 percentage points.
      </p>
      <p className="text-gray-400 text-xs mb-6">
        Down from 17.5–31.6 percentage points in early 2023
      </p>

      {/* Chart: single line showing US lead over China in Arena Elo points */}
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={capabilityData}
          margin={{ top: 16, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="quarter"
            axisLine={false}
            tickLine={false}
            tick={tickStyle}
            tickFormatter={formatTick}
            interval={3}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={tickStyle}
            tickFormatter={(v: number) => `${v}pp`}
            domain={[0, 35]}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Annotation: DeepSeek-R1 */}
          <ReferenceLine x="Q1 2025" stroke="#d1d5db" strokeDasharray="3 3">
            <Label
              value="DeepSeek-R1"
              position="insideTopRight"
              fill="#9ca3af"
              fontSize={9}
              fontFamily="Georgia, serif"
            />
          </ReferenceLine>

          {/* Baseline: parity */}
          <ReferenceLine y={0} stroke="#e5e7eb">
            <Label value="parity" position="insideBottomRight" fill="#d1d5db" fontSize={9} fontFamily="Georgia, serif" />
          </ReferenceLine>

          {/* Single black line: US lead over China */}
          <Line
            type="monotone"
            dataKey="gap"
            stroke="#111111"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Source: Stanford AI Index 2026 Report, Chapter 1; Arena leaderboard (lmarena.ai), March 2026.
        Quarterly values interpolated from annual index figures.
      </p>
    </section>
  );
}
