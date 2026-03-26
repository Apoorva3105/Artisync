/**
 * ArtisyncLogo — Embroidery-style SVG mark
 *
 * A stylised lotus + interlaced thread border, referencing
 * the traditional kantha / zardozi embroidery aesthetic.
 * Designed on a 100×100 grid.
 */

interface ArtisyncLogoProps {
  className?: string
  /** If true, renders only the mark without any text */
  markOnly?: boolean
}

export default function ArtisyncLogo({ className = 'w-10 h-10', markOnly = true }: ArtisyncLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Artisync Logo"
      role="img"
    >
      <defs>
        {/* Warm terracotta gradient */}
        <linearGradient id="logoGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4713B" />
          <stop offset="100%" stopColor="#B49A5E" />
        </linearGradient>
        {/* Gold shimmer */}
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B49A5E" />
          <stop offset="50%" stopColor="#E8C97A" />
          <stop offset="100%" stopColor="#B49A5E" />
        </linearGradient>
        {/* Drop shadow */}
        <filter id="logoShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#00000033" />
        </filter>
      </defs>

      {/* ── Outer octagonal embroidery frame ── */}
      {/* Border stitching dashes — top */}
      {[16, 25, 34, 43, 52, 61, 70, 79].map((x, i) => (
        <rect key={`t${i}`} x={x} y={7} width={5} height={2} rx={1} fill="url(#logoGold)" opacity={0.8} />
      ))}
      {/* Bottom */}
      {[16, 25, 34, 43, 52, 61, 70, 79].map((x, i) => (
        <rect key={`b${i}`} x={x} y={91} width={5} height={2} rx={1} fill="url(#logoGold)" opacity={0.8} />
      ))}
      {/* Left */}
      {[16, 25, 34, 43, 52, 61, 70, 79].map((y, i) => (
        <rect key={`l${i}`} x={7} y={y} width={2} height={5} rx={1} fill="url(#logoGold)" opacity={0.8} />
      ))}
      {/* Right */}
      {[16, 25, 34, 43, 52, 61, 70, 79].map((y, i) => (
        <rect key={`r${i}`} x={91} y={y} width={2} height={5} rx={1} fill="url(#logoGold)" opacity={0.8} />
      ))}

      {/* Corner diamond accents */}
      {[[12, 12], [88, 12], [12, 88], [88, 88]].map(([cx, cy], i) => (
        <polygon
          key={`d${i}`}
          points={`${cx},${cy - 5} ${cx + 4},${cy} ${cx},${cy + 5} ${cx - 4},${cy}`}
          fill="url(#logoGold)"
          opacity={0.9}
        />
      ))}

      {/* ── Inner circle backing ── */}
      <circle cx="50" cy="50" r="34" fill="url(#logoGrad1)" opacity={0.12} />
      <circle cx="50" cy="50" r="34" stroke="url(#logoGold)" strokeWidth="1" fill="none" strokeDasharray="4 3" />

      {/* ── Kantha cross-stitch ring (inner ring of dots) ── */}
      {Array.from({ length: 16 }, (_, i) => {
        const angle = (i / 16) * Math.PI * 2
        const r = 26
        return (
          <circle
            key={`dot${i}`}
            cx={50 + r * Math.cos(angle)}
            cy={50 + r * Math.sin(angle)}
            r={1.2}
            fill="url(#logoGold)"
            opacity={0.6}
          />
        )
      })}

      {/* ── Stylised Lotus flower (7 petals) ── */}
      {/* Centre petals */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2
        const px = 50 + 18 * Math.cos(angle)
        const py = 50 + 18 * Math.sin(angle)
        // Control points for a petal shape
        const cp1x = 50 + 10 * Math.cos(angle - 0.5)
        const cp1y = 50 + 10 * Math.sin(angle - 0.5)
        const cp2x = 50 + 10 * Math.cos(angle + 0.5)
        const cp2y = 50 + 10 * Math.sin(angle + 0.5)
        return (
          <path
            key={`petal${i}`}
            d={`M 50 50 Q ${cp1x} ${cp1y} ${px} ${py} Q ${cp2x} ${cp2y} 50 50`}
            fill="url(#logoGrad1)"
            opacity={0.75}
            filter="url(#logoShadow)"
          />
        )
      })}

      {/* Inner petals (slightly rotated) */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2 + Math.PI / 6
        const px = 50 + 12 * Math.cos(angle)
        const py = 50 + 12 * Math.sin(angle)
        const cp1x = 50 + 7 * Math.cos(angle - 0.6)
        const cp1y = 50 + 7 * Math.sin(angle - 0.6)
        const cp2x = 50 + 7 * Math.cos(angle + 0.6)
        const cp2y = 50 + 7 * Math.sin(angle + 0.6)
        return (
          <path
            key={`ipetal${i}`}
            d={`M 50 50 Q ${cp1x} ${cp1y} ${px} ${py} Q ${cp2x} ${cp2y} 50 50`}
            fill="url(#logoGold)"
            opacity={0.85}
          />
        )
      })}

      {/* ── Centre jewel ── */}
      <circle cx="50" cy="50" r="5.5" fill="url(#logoGold)" />
      <circle cx="50" cy="50" r="3" fill="#fff" opacity={0.6} />

      {/* ── Thread diagonal cross (embroidery texture) ── */}
      {[
        'M 26 26 L 38 38', 'M 74 26 L 62 38',
        'M 26 74 L 38 62', 'M 74 74 L 62 62',
      ].map((d, i) => (
        <path
          key={`thread${i}`}
          d={d}
          stroke="url(#logoGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity={0.4}
          strokeDasharray="2 2"
        />
      ))}
    </svg>
  )
}
