import type { ReactNode } from "react";

const svg = {
  viewBox: "0 0 48 48",
  className: "h-12 w-12 text-cream",
  "aria-hidden": true as const,
};

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const amenityIcons: Record<string, ReactNode> = {
  "digital-detox": (
    <svg {...svg}>
      <rect {...stroke} x="16.5" y="8" width="15" height="28" rx="2.75" />
      <path {...stroke} d="M21 11.5h6" />
      <circle {...stroke} cx="24" cy="24" r="16.5" />
      <path {...stroke} strokeWidth={2.6} d="M12.5 35.5 35.5 12.5" />
    </svg>
  ),

  "farm-fresh-food": (
    <svg {...svg}>
      <g fill="currentColor">
        <path d="M14.5 22.5c-1.2-3.8.2-8.2 3.6-10.5 1.1 2.8.8 5.7-.2 8.2h2.2c.6-3.2 2.2-6.1 4.6-8.2 1.6 2.6 2.2 5.6 1.7 8.5h2.1c1.2-2.7 3.4-4.8 6.2-5.8-.2 2.6-1.4 5-3.3 6.6h.8c1.8-1.6 4.2-2.3 6.6-1.8-1.2 2-3.2 3.4-5.5 3.8H13.8c.1-.3.4-.6.7-.8z" />
        <path d="M8.2 26.2h31.6c.6 0 1 .6.9 1.2-1 6.2-6 11.2-12.3 12.8l-.4 2.1a1.3 1.3 0 0 1-1.3 1.1H19.3a1.3 1.3 0 0 1-1.3-1.1l-.4-2.1C11.3 38.6 6.3 33.6 5.3 27.4c-.1-.6.3-1.2.9-1.2z" />
      </g>
    </svg>
  ),

  "high-oxygen": (
    <svg {...svg}>
      <path
        {...stroke}
        d="M16.2 36.2h16.4a7.2 7.2 0 0 0 .8-14.3A10 10 0 0 0 14.8 20a8.1 8.1 0 0 0 1.4 16.2z"
      />
      <text
        x="24"
        y="29.6"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
      >
        O
        <tspan fontSize="8" dy="3">
          2
        </tspan>
      </text>
    </svg>
  ),

  counselling: (
    <svg {...svg}>
      <g {...stroke}>
        <circle cx="13.5" cy="13" r="3.4" />
        <circle cx="34.5" cy="13" r="3.4" />
        <path d="M8.8 22.2c.6-3.2 2.5-5 4.7-5s4.1 1.8 4.7 5" />
        <path d="M29.8 22.2c.6-3.2 2.5-5 4.7-5s4.1 1.8 4.7 5" />
        <ellipse cx="24" cy="27.6" rx="7.4" ry="2.4" />
        <path d="M24 30v8.4" />
        <path d="M19.4 38.4h9.2" />
        <path d="M10.4 24.8v14.6M37.6 24.8v14.6" />
        <path d="M10.4 32.6h6.2M37.6 32.6h-6.2" />
      </g>
    </svg>
  ),

  wifi: (
    <svg {...svg}>
      <g {...stroke} strokeWidth={2.4}>
        <path d="M8.5 19.2a23 23 0 0 1 31 0" />
        <path d="M14.2 25.6a15.2 15.2 0 0 1 19.6 0" />
        <path d="M20 31.8a7.4 7.4 0 0 1 8 0" />
      </g>
      <circle cx="24" cy="37.6" r="2.4" fill="currentColor" />
    </svg>
  ),

  meditation: (
    <svg {...svg}>
      <g {...stroke}>
        <circle cx="24" cy="11.2" r="3.6" />
        <path d="M24 15.6v8.8" />
        <path d="M16.2 22.4c2.4 1.2 5.2 1.8 7.8 1.8s5.4-.6 7.8-1.8" />
        <path d="M13.4 31.6c2.2-3.8 4.8-5.8 10.6-5.8s8.4 2 10.6 5.8" />
        <path d="M13.4 31.6c-2.4 1.6-4.2 3.8-5.2 6.6M34.6 31.6c2.4 1.6 4.2 3.8 5.2 6.6" />
        <path d="M18.6 40.2h10.8" />
      </g>
    </svg>
  ),

  "farm-tour": (
    <svg {...svg}>
      <g {...stroke}>
        <circle cx="24" cy="10.8" r="3.5" />
        <path d="M24 15.2v11.4" />
        <path d="M24 20.4c-3.2.4-5.6 2.2-7.2 4.8" />
        <path d="M24 26.6 18.4 39.2M24 26.6 30.2 39.2" />
        <path d="M15.2 16.4c2.6 1.4 4.6 2 8.8 2s6.2-.6 8.8-2" />
        <path d="M14.2 12.6v18.8" />
        <path d="M28.4 18.2h5.6v7.6c0 1.2-.8 2.2-2 2.4h-1.6" />
      </g>
    </svg>
  ),

  boating: (
    <svg {...svg}>
      <g fill="currentColor">
        <circle cx="20.4" cy="15.6" r="3.8" />
        <path d="M20.4 20.4c-2.4 0-4.4 1.8-4.7 4.2l-.4 3.4h5.4l.4-3.2 4 2.1a1.7 1.7 0 0 0 1.6-3l-3.8-2a4.7 4.7 0 0 0-2.5-1.5z" />
        <path d="M6.4 30.6h35.2c-2.3 5.6-9.3 8.8-17.6 8.8s-15.3-3.2-17.6-8.8z" />
      </g>
      <path {...stroke} strokeWidth={2.1} d="m27 21.2 8.4 13.4" />
      <path
        {...stroke}
        strokeWidth={1.8}
        d="M9.4 42.2c1.9-1.4 3.8-1.4 5.7 0s3.8 1.4 5.7 0 3.8-1.4 5.7 0 3.8 1.4 5.7 0 3.8-1.4 5.7 0"
      />
    </svg>
  ),
};
