import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PaneaLogo from './PaneaLogo'

const links = [
  { label: 'Our Story', href: '#experience' },
  { label: 'Menu',      href: '#menu' },
  { label: 'Gallery',   href: '#gallery' },
  { label: 'Visit Us',  href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-soft border-b border-rose/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="cursor-pointer flex items-center">
            <PaneaLogo size={52} showTagline={false} />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-body font-medium text-pinkdark/70 hover:text-rose-deep transition-colors duration-200 text-sm tracking-wide"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#menu"
              className="hidden md:inline-flex items-center gap-2 bg-pinkdark text-blush px-5 py-2.5 rounded-full text-sm font-body font-semibold
                         hover:bg-pinkdark-light transition-all duration-300 shadow-soft hover:shadow-rose cursor-pointer"
            >
              See the Menu
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-6 h-0.5 bg-pinkdark rounded-full origin-center" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-6 h-0.5 bg-pinkdark rounded-full" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-6 h-0.5 bg-pinkdark rounded-full origin-center" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[80px] inset-x-0 z-40 bg-cream/96 backdrop-blur-md border-b border-rose/20 shadow-soft md:hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={() => setMenuOpen(false)}
                    className="block font-body font-semibold text-pinkdark text-lg hover:text-rose-deep transition-colors cursor-pointer">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#menu" onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center bg-pinkdark text-blush px-6 py-3 rounded-full font-body font-semibold mt-2 w-full cursor-pointer hover:bg-pinkdark-light transition-colors">
                  See the Menu
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
