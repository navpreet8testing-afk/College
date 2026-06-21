"use client";

/**
 * The Shivaji College crest + wordmark. Used identically in the header,
 * footer and preloader so the brand renders byte-identically everywhere.
 */
export function CollegeLogo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const title = variant === "light" ? "#ffffff" : "#1a2744";
  const tagline = variant === "light" ? "#d4a04c" : "#d4a04c";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Crest */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M24 2L4 9v13c0 11.2 7.6 21.5 20 25 12.4-3.5 20-13.8 20-25V9L24 2z"
          fill={variant === "light" ? "#ffffff" : "#1a2744"}
          stroke="#d4a04c"
          strokeWidth="2"
        />
        <path
          d="M24 8L10 12.6v9.4c0 8.6 5.6 16.4 14 19 8.4-2.6 14-10.4 14-19v-9.4L24 8z"
          fill={variant === "light" ? "rgba(26,39,68,0.06)" : "rgba(255,255,255,0.06)"}
        />
        <text
          x="24"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="700"
          fill={variant === "light" ? "#1a2744" : "#d4a04c"}
        >
          SC
        </text>
        <path
          d="M16 28h16M19 32h10"
          stroke={variant === "light" ? "#d4a04c" : "#d4a04c"}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="24" cy="36" r="1.6" fill={variant === "light" ? "#1a2744" : "#d4a04c"} />
      </svg>
      {/* Wordmark */}
      <div className="leading-none">
        <div
          className="font-serif font-extrabold tracking-tight text-[19px] sm:text-[21px]"
          style={{ color: title }}
        >
          SHIVAJI COLLEGE
        </div>
        <div
          className="font-sans font-medium tracking-[0.22em] text-[10px] sm:text-[11px] mt-1"
          style={{ color: tagline }}
        >
          ESTD. 1962
        </div>
      </div>
    </div>
  );
}
