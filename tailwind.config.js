/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Panea brand palette derived from the logo ──────────────────
        // Logo: soft rose-pink circle, dark warm-brown serif, cream
        rose:    { DEFAULT: '#F2AFBE', light: '#FAD5DE', dark: '#E0899C', deep: '#C96B82' },
        blush:   { DEFAULT: '#FFF0F4', light: '#FFFAFB', dark: '#FAD5DE' },
        pinkdark:{ DEFAULT: '#3A2820', light: '#5C3F35', dark: '#1E100C' },
        cream:   { DEFAULT: '#FFF7F8', dark: '#FFEEF2' },
        mauve:   { DEFAULT: '#C4859A', light: '#D9A8B8', dark: '#A36578' },
        gold:    { DEFAULT: '#C4956A', light: '#DEB897', dark: '#A67A52' },
        sage:    { DEFAULT: '#8BA888', light: '#AECBAB', dark: '#6B8A68' },
        seablue: { DEFAULT: '#8DB5C8', light: '#BAD3DF', dark: '#5E91A8' },
        // Semantic aliases
        brand:   '#F2AFBE',   // the logo pink
        text:    '#3A2820',   // dark brown text
        muted:   '#9B7070',   // muted rose-brown
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        craft:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'gradient':   'gradient 10s ease infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-16px) rotate(2deg)' },
          '66%':      { transform: 'translateY(-6px) rotate(-2deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.85', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
        '400': '400% 400%',
      },
      boxShadow: {
        rose:  '0 8px 40px rgba(242,175,190,0.40)',
        soft:  '0 4px 24px rgba(58,40,32,0.10)',
        warm:  '0 8px 40px rgba(196,133,154,0.25)',
        glow:  '0 0 40px rgba(242,175,190,0.50)',
      },
    },
  },
  plugins: [],
}
