/**
 * HandDrawnIllustrations.tsx
 * Minimal decorative SVG components — used sparingly as subtle accents only.
 * SoyStories is clean & modern; these should never dominate the design.
 */

import React from "react";

interface IllustrationProps {
  className?: string;
  color?: string;
  size?: number;
}

/* ── Subtle wave pattern (section divider) ── */
export function WavePattern({
  className = "",
  color = "#C8C7C5",
  width = 300,
}: {
  className?: string;
  color?: string;
  width?: number;
}) {
  return (
    <svg
      viewBox="0 0 300 20"
      width={width}
      height={width * 0.067}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 10 C25 4, 50 4, 75 10 C100 16, 125 16, 150 10 C175 4, 200 4, 225 10 C250 16, 275 16, 300 10"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

/* ── Tiny leaf (minimal accent) ── */
export function LeafAccent({ className = "", color = "#3E6044", size = 20 }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 18 C10 18, 3 13, 3 8 C3 3, 10 1, 10 1 C10 1, 17 3, 17 8 C17 13, 10 18, 10 18Z"
        fill={color}
        opacity="0.08"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />
      <path d="M10 3 L10 16" stroke={color} strokeWidth="0.4" opacity="0.15" />
    </svg>
  );
}
