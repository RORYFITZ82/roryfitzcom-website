// Original brand-coloured illustrations for the Process section.
// Pure inline SVG — no external assets, matches the rf- palette.

export function DiscoverIllustration() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="discoverBg" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B2449" />
          <stop offset="1" stopColor="#150F26" />
        </linearGradient>
        <linearGradient id="discoverCard1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#3D2E62" />
          <stop offset="1" stopColor="#2A1E48" />
        </linearGradient>
        <linearGradient id="discoverAvatar1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#F9AFC6" />
          <stop offset="1" stopColor="#E73A68" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#discoverBg)" />

      {/* back card */}
      <g transform="rotate(-6 150 95)">
        <rect x="60" y="45" width="160" height="110" rx="14" fill="url(#discoverCard1)" stroke="rgba(255,255,255,0.10)" />
        <circle cx="140" cy="90" r="22" fill="url(#discoverAvatar1)" opacity="0.85" />
        <path d="M110 148c6-22 24-34 30-34s24 12 30 34" stroke="#F5F4F8" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>

      {/* front card */}
      <g transform="rotate(4 250 125)">
        <rect x="185" y="70" width="160" height="110" rx="14" fill="#1D1832" stroke="rgba(255,255,255,0.14)" />
        <circle cx="265" cy="115" r="22" fill="#F5F4F8" opacity="0.9" />
        <path d="M235 173c6-22 24-34 30-34s24 12 30 34" stroke="#E73A68" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>

      {/* connecting badge */}
      <circle cx="200" cy="118" r="20" fill="#E73A68" />
      <path d="M195 108v20l17-10-17-10z" fill="#FFFFFF" />

      {/* ambient dots */}
      <circle cx="350" cy="40" r="4" fill="#E73A68" />
      <circle cx="335" cy="55" r="2.5" fill="#F9AFC6" opacity="0.6" />
      <circle cx="45" cy="185" r="3" fill="#F9AFC6" opacity="0.5" />
    </svg>
  );
}

export function CreateIllustration() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="createBg" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B2449" />
          <stop offset="1" stopColor="#150F26" />
        </linearGradient>
        <linearGradient id="createFrame" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#E73A68" />
          <stop offset="0.55" stopColor="#8B3A8F" />
          <stop offset="1" stopColor="#2A1E48" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#createBg)" />

      <rect x="55" y="35" width="290" height="150" rx="14" fill="url(#createFrame)" />
      <rect x="55" y="35" width="145" height="150" rx="14" fill="#150F26" opacity="0.35" />

      {/* timeline waveform hint */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <rect
          key={i}
          x={75 + i * 22}
          y={150 - (Math.abs(6 - i) % 4) * 10 - 14}
          width="8"
          height={(Math.abs(6 - i) % 4) * 10 + 20}
          rx="4"
          fill="#F5F4F8"
          opacity={0.18}
        />
      ))}

      {/* vertical slider handle */}
      <line x1="200" y1="35" x2="200" y2="185" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 5" opacity="0.8" />
      <circle cx="200" cy="35" r="9" fill="#FFFFFF" />
      <circle cx="200" cy="185" r="9" fill="#FFFFFF" />
      <g transform="translate(200 110)">
        <circle r="16" fill="#E73A68" />
        <path d="M-5 -5l-5 5 5 5M5 -5l5 5-5 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

export function DeliverIllustration() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="deliverBg" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B2449" />
          <stop offset="1" stopColor="#150F26" />
        </linearGradient>
        <linearGradient id="deliverCard1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#3D2E62" />
          <stop offset="1" stopColor="#2A1E48" />
        </linearGradient>
        <linearGradient id="deliverCard2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#E73A68" />
          <stop offset="1" stopColor="#C42550" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#deliverBg)" />

      <g transform="rotate(-10 200 110)">
        <rect x="120" y="55" width="150" height="95" rx="12" fill="url(#deliverCard1)" stroke="rgba(255,255,255,0.10)" />
      </g>
      <g transform="rotate(6 200 110)">
        <rect x="130" y="60" width="150" height="95" rx="12" fill="#1D1832" stroke="rgba(255,255,255,0.14)" />
      </g>
      <g>
        <rect x="125" y="65" width="150" height="95" rx="12" fill="url(#deliverCard2)" />
        <circle cx="200" cy="112" r="24" fill="rgba(255,255,255,0.16)" />
        <circle cx="200" cy="112" r="24" fill="none" stroke="#FFFFFF" strokeOpacity="0.6" />
        <path d="M192 100v24l22-12-22-12z" fill="#FFFFFF" />
      </g>

      {/* platform tags */}
      <rect x="60" y="175" width="54" height="20" rx="10" fill="#FFFFFF" opacity="0.08" />
      <rect x="122" y="175" width="54" height="20" rx="10" fill="#FFFFFF" opacity="0.08" />
      <rect x="184" y="175" width="54" height="20" rx="10" fill="#FFFFFF" opacity="0.08" />

      <circle cx="345" cy="45" r="4" fill="#F9AFC6" opacity="0.6" />
      <circle cx="360" cy="60" r="2.5" fill="#E73A68" />
    </svg>
  );
}
