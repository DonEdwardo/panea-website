/**
 * SVG replica of the Panèa logo: pink circle, serif "PANÈA", "fluffy bites & more" tagline.
 * To use the real PNG: save it as panea/public/panea_logo.png and replace with:
 *   <img src="/panea_logo.png" alt="Panèa" style={{ width: size, height: size }} />
 */

export default function PaneaLogo({ className = '', size = 56, showTagline = true }) {
  const pink = '#F2AFBE'
  const dark = '#3A2820'

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size }}
      aria-label="Panèa — fluffy bites & more"
      role="img"
    >
      <circle cx="100" cy="100" r="96" fill={pink} />
      <text
        x="100"
        y={showTagline ? "95" : "108"}
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize={showTagline ? "38" : "44"}
        fontWeight="700"
        fill={dark}
        letterSpacing="6"
      >
        PAN&#200;A
      </text>
      {showTagline && (
        <>
          <line x1="44" y1="108" x2="156" y2="108" stroke={dark} strokeWidth="0.8" opacity="0.5" />
          <text
            x="100"
            y="126"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="13"
            fontWeight="400"
            fill={dark}
            letterSpacing="2"
            opacity="0.85"
          >
            fluffy bites &amp; more
          </text>
        </>
      )}
    </svg>
  )
}
