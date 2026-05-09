"use client";

// Panel 4: The Productivity Gap.
// Three projection lines (solid/dashed/dotted, all black) fan from 0 in 2023
// to their 2030 endpoints. A single BLS realized dot sits near the bottom,
// separated from the projections by a "today" reference line.
// The gap between the dot and the lines is the story.

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
  ResponsiveContainer,
  Label,
} from "recharts";
import { productivityData, blsRealized, projectionSources } from "@/data/productivity";

// --- Types ---

type TooltipProps = {
  active?: boolean;
  payload?: Array<{ name: string; value: number }>;
  label?: string | number;
};

// Recharts passes x/y as string | number depending on axis scale
type LineLabelProps = {
  x?: string | number;
  y?: string | number;
  index?: number;
};

// --- Helpers ---

const SERIES_LENGTH = productivityData.length; // 8 points: 2023–2030
const TICK_FONT = { fontFamily: "Georgia, serif", fontSize: 11, fill: "#9ca3af" };

// Returns a label-rendering function that only draws at the last data point (2030).
// yOffset lets us nudge overlapping labels apart slightly.
function makeEndLabel(text: string, yOffset: number = 0) {
  return function EndLabel({ x, y, index }: LineLabelProps) {
    if (index !== SERIES_LENGTH - 1) return null;
    return (
      <text
        x={Number(x ?? 0) + 8}
        y={Number(y ?? 0) + 4 + yOffset}
        fontSize={11}
        fill="#374151"
        fontFamily="Georgia, serif"
      >
        {text}
      </text>
    );
  };
}

// Tooltip: shows year + all three projection values on hover
function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        fontSize: 12,
        background: "#fff",
        border: "1px solid #e5e7eb",
        padding: "8px 12px",
        lineHeight: 1.6,
      }}
    >
      <div style={{ color: "#6b7280", marginBottom: 4 }}>{label}</div>
      {payload.map((entry) => (
        <div key={entry.name}>
          {entry.name}: {entry.value.toFixed(2)}pp
        </div>
      ))}
    </div>
  );
}

// --- Component ---

export default function ProductivityPanel() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-normal mb-1">The Productivity Gap</h2>
      <p className="text-gray-500 text-sm mb-2">
        Measured AI productivity gains: 0.5%–3% by 2030. Realized so far: ~0%.
      </p>
      <p className="text-gray-400 text-xs mb-6">
        Despite $1.6T+ in cumulative AI investment since 2013, BLS-measured productivity gains
        attributable to AI remain statistically indistinguishable from zero.
      </p>

      {/*
        Chart: three projection lines fan from 0 (2023) to their 2030 endpoints.
        A dashed "today" line at 2026 separates realized from projected.
        The BLS realized dot at (2026, 0.1) sits far below all projections.
        Right margin of 120px gives room for inline labels at 2030.
      */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={productivityData}
          margin={{ top: 20, right: 120, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={TICK_FONT}
            // Show every year; format as 2-digit for compactness on small screens
            ticks={[2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]}
            tickFormatter={(v: number) => `'${String(v).slice(2)}`}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={TICK_FONT}
            tickFormatter={(v: number) => `${v}%`}
            domain={[0, 3.5]}
            ticks={[0, 1, 2, 3]}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
          />

          {/* Vertical dashed "today" line separating realized from projected */}
          <ReferenceLine x={2026} stroke="#d1d5db" strokeDasharray="3 3">
            <Label
              value="today"
              position="top"
              fill="#9ca3af"
              fontSize={10}
              fontFamily="Georgia, serif"
            />
          </ReferenceLine>

          {/* BLS realized dot — the single measured data point */}
          <ReferenceDot
            x={blsRealized.year}
            y={blsRealized.value}
            r={4}
            fill="#111111"
            stroke="#ffffff"
            strokeWidth={2}
            label={{
              value: blsRealized.label,
              position: "top",
              fontSize: 10,
              fill: "#374151",
              fontFamily: "Georgia, serif",
            }}
          />

          {/* Bull case: BCG / McKinsey — solid black line */}
          <Line
            type="monotone"
            dataKey="bull"
            name="BCG/McKinsey"
            stroke="#111111"
            strokeWidth={1.5}
            dot={false}
            label={makeEndLabel("BCG/McKinsey 3.0%")}
          />

          {/* Middle case: Goldman Sachs — dashed (matches China line in ComputePanel) */}
          <Line
            type="monotone"
            dataKey="middle"
            name="Goldman Sachs"
            stroke="#111111"
            strokeWidth={1.5}
            strokeDasharray="5 3"
            dot={false}
            label={makeEndLabel("Goldman Sachs 1.75%")}
          />

          {/* Conservative case: Bick et al. NBER — dotted */}
          <Line
            type="monotone"
            dataKey="conservative"
            name="Bick et al. (NBER)"
            stroke="#111111"
            strokeWidth={1.5}
            strokeDasharray="2 4"
            dot={false}
            label={makeEndLabel("Bick et al. 1.0%")}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Hero stat below chart */}
      <p className="text-sm mt-6 mb-5">
        $1.6T invested since 2013 → ~0% measured TFP gain.
      </p>

      {/* Caveat */}
      <p className="text-xs text-gray-400 leading-relaxed mb-5">
        Productivity gains from AI are contested. Estimates vary by methodology. Realized gains
        lag investment by years. This panel shows the range of credible estimates against
        current measurement.
      </p>

      {/* Sources, cited inline as italic text per brief */}
      <p className="text-xs text-gray-400 leading-relaxed">
        Sources:{" "}
        {projectionSources.map((source, i) => (
          <span key={source}>
            <em>{source}</em>
            {i < projectionSources.length - 1 ? "; " : "."}
          </span>
        ))}
      </p>
    </section>
  );
}
