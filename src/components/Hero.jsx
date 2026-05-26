import { Suspense } from 'react'
import { motion } from 'framer-motion'
import CoffeeScene from './3d/CoffeeScene'
import PaneaLogo from './PaneaLogo'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
})

function Blob({ className }) {
  return <div className={`absolute rounded-full blur-3xl opacity-50 pointer-events-none ${className}`} />
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #FFF7F8 0%, #FAD5DE 30%, #FFF0F4 60%, #FFEEF2 100%)' }}
    >
      {/* Background blobs */}
      <Blob className="w-[500px] h-[500px] bg-rose/30 -top-32 -right-32 animate-float-slow" />
      <Blob className="w-[350px] h-[350px] bg-rose-light/40 bottom-10 -left-16 animate-float" />
      <Blob className="w-[280px] h-[280px] bg-mauve/20 top-1/2 left-1/4 animate-float-fast" />

      {/* Decorative circle motif top-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="absolute top-24 left-4 lg:left-12 pointer-events-none"
      >
        <svg viewBox="0 0 80 80" className="w-20 h-20 lg:w-28 lg:h-28 animate-spin-slow" fill="none">
          <circle cx="40" cy="40" r="36" stroke="#F2AFBE" strokeWidth="2.5" strokeDasharray="6 4" />
          <circle cx="40" cy="40" r="22" fill="#F2AFBE" opacity="0.35" />
          <circle cx="40" cy="40" r="8"  fill="#E0899C" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Decorative sprig — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.0, delay: 1.3 }}
        className="absolute bottom-28 right-4 lg:right-16 pointer-events-none animate-float-slow"
      >
        <svg viewBox="0 0 40 70" className="w-10 h-16" fill="none">
          <path d="M20 68 C20 68 4 42 8 18 C11 4 20 2 20 2 C20 2 29 4 32 18 C36 42 20 68 20 68Z" fill="#8BA888" opacity="0.7"/>
          <path d="M20 68 L20 4" stroke="#6B8A68" strokeWidth="1.2" opacity="0.5"/>
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-16 lg:pt-24 lg:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center min-h-[calc(100vh-7rem)]">

          {/* ── Text ── */}
          <div className="flex flex-col gap-6 md:pr-6 w-full overflow-hidden">

            {/* Location badge */}
            <motion.div {...fadeUp(0.3)}>
              <span className="inline-flex items-center gap-2 bg-white/70 text-pinkdark/80 px-4 py-2 rounded-full text-sm font-body font-medium border border-rose/30 backdrop-blur-sm">
                <svg className="w-3.5 h-3.5 text-rose-deep shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Menton, Côte d'Azur
              </span>
            </motion.div>

            {/* Logo */}
            <motion.div {...fadeUp(0.4)}>
              <PaneaLogo size={96} showTagline={true} />
            </motion.div>

            {/* Headline */}
            <motion.div {...fadeUp(0.5)}>
              <h1 className="font-display text-[2.1rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-pinkdark break-words w-full">
                Where every bite
                <br />
                is <span className="italic text-gradient-rose">fluffy,</span>{' '}
                <span className="italic text-gradient-warm">fresh</span>
                <br className="hidden sm:block" />
                {' '}&amp; unforgettable
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.65)}
              className="font-body text-base lg:text-lg text-pinkdark/65 leading-relaxed max-w-md w-full"
            >
              Specialty coffee, cloud-light pastries, and warm Menton sunshine —
              crafted with love in the heart of the French Riviera.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.75)} className="flex flex-wrap gap-3">
              <a href="#menu"
                className="group inline-flex items-center gap-2 bg-pinkdark text-blush-light px-6 py-3.5 rounded-full font-body font-semibold
                           hover:bg-pinkdark-light transition-all duration-300 shadow-soft hover:shadow-rose hover:-translate-y-0.5 cursor-pointer text-sm">
                Explore the Menu
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#location"
                className="group inline-flex items-center gap-2 border-2 border-pinkdark/30 text-pinkdark px-6 py-3.5 rounded-full font-body font-semibold
                           hover:bg-rose/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Visit Us
              </a>
            </motion.div>

            {/* Social strip */}
            <motion.div {...fadeUp(0.85)} className="flex items-center gap-4 pt-1">
              <a href="https://www.instagram.com/panea.fr/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-pinkdark/55 hover:text-rose-deep transition-colors text-sm font-body cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @panea.fr
              </a>
              <span className="text-pinkdark/20">|</span>
              <span className="text-pinkdark/50 text-sm font-body">Open daily · 8am – 6pm</span>
            </motion.div>
          </div>

          {/* ── 3D Scene ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative h-[360px] md:h-[520px] lg:h-[600px] w-full"
          >
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="w-14 h-14 rounded-full border-4 border-rose border-t-transparent animate-spin" />
              </div>
            }>
              <CoffeeScene />
            </Suspense>

            {/* Floating label — today's special */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 right-2 md:right-0 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-rose border border-rose/20"
            >
              <p className="text-xs font-body text-pinkdark/50 uppercase tracking-wide">Today's Special</p>
              <p className="font-display text-pinkdark font-semibold text-sm mt-0.5">Rose Choux</p>
            </motion.div>

            {/* Floating label — baked fresh */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-20 left-0 bg-rose text-pinkdark rounded-2xl px-4 py-3 shadow-rose"
            >
              <p className="text-xs font-body uppercase tracking-wide opacity-70">Fluffy bites</p>
              <p className="font-display font-semibold text-sm mt-0.5">Almond Croissant</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pinkdark/30"
        >
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-10 bg-gradient-to-b from-rose/50 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
