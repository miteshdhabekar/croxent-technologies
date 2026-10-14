/** Abstract architectural-grid visual built with SVG. Monochrome navy/slate palette. */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        role="img"
        aria-label="Abstract illustration of layered software architecture blocks on a grid"
      >
        <defs>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M25 0H0V25" fill="none" stroke="#E2E7ED" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" rx="20" fill="#F5F7FA" />
        <rect width="400" height="400" rx="20" fill="url(#grid)" />

        {/* connector lines */}
        <g stroke="#547A9E" strokeWidth="1.5" strokeDasharray="4 5" fill="none">
          <path d="M200 100V140" />
          <path d="M120 210V250M280 210V250" />
          <path d="M120 210H280" />
        </g>

        {/* top block */}
        <g>
          <rect x="130" y="52" width="140" height="48" rx="10" fill="#14263D" />
          <rect x="146" y="68" width="48" height="6" rx="3" fill="#fff" opacity="0.9" />
          <rect x="146" y="80" width="80" height="5" rx="2.5" fill="#fff" opacity="0.4" />
        </g>

        {/* middle block */}
        <g>
          <rect x="100" y="140" width="200" height="70" rx="12" fill="#fff" stroke="#14263D" strokeWidth="2" />
          <rect x="120" y="158" width="60" height="8" rx="4" fill="#14263D" />
          <rect x="120" y="174" width="100" height="6" rx="3" fill="#435B75" opacity="0.5" />
          <rect x="120" y="188" width="70" height="6" rx="3" fill="#435B75" opacity="0.3" />
          <circle cx="268" cy="175" r="16" fill="none" stroke="#547A9E" strokeWidth="3" />
          <circle cx="268" cy="175" r="5" fill="#547A9E" />
        </g>

        {/* bottom blocks */}
        <g>
          <rect x="60" y="250" width="120" height="60" rx="10" fill="#435B75" />
          <rect x="76" y="268" width="50" height="6" rx="3" fill="#fff" opacity="0.85" />
          <rect x="76" y="282" width="76" height="5" rx="2.5" fill="#fff" opacity="0.4" />
          <rect x="220" y="250" width="120" height="60" rx="10" fill="#fff" stroke="#547A9E" strokeWidth="2" />
          <rect x="236" y="268" width="50" height="6" rx="3" fill="#14263D" />
          <rect x="236" y="282" width="76" height="5" rx="2.5" fill="#547A9E" opacity="0.5" />
        </g>

        {/* base bar */}
        <rect x="60" y="334" width="280" height="12" rx="6" fill="#14263D" opacity="0.9" />
        <rect x="60" y="334" width="110" height="12" rx="6" fill="#547A9E" />
      </svg>
    </div>
  )
}
