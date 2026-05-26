import { motion } from 'framer-motion'
import PaneaLogo from './PaneaLogo'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-pinkdark text-blush-light overflow-hidden">

      {/* CTA banner */}
      <div className="bg-gradient-to-r from-rose via-mauve to-rose-deep py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-pinkdark/20 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <p className="font-craft italic text-3xl lg:text-4xl text-white/90 mb-3">
            Menton is sweeter with a Panèa moment
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-8">
            We'd love to see you.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#location"
              className="inline-flex items-center gap-2 bg-white text-pinkdark px-7 py-3.5 rounded-full font-body font-semibold
                         hover:bg-blush-light transition-all duration-300 shadow-soft hover:-translate-y-0.5 cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Find Us
            </a>
            <a href="https://www.instagram.com/panea.fr/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-7 py-3.5 rounded-full
                         font-body font-semibold hover:bg-white hover:text-pinkdark transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <PaneaLogo size={72} showTagline={true} className="self-start" />
            <p className="font-body text-blush/60 text-sm leading-relaxed max-w-xs mt-1">
              A specialty bakery café in Menton, France. Fluffy bites, beautiful coffee,
              and the warmth of the French Riviera — come as you are.
            </p>
            <a href="https://www.instagram.com/panea.fr/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blush/55 hover:text-rose transition-colors text-sm font-body cursor-pointer w-fit">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @panea.fr
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="font-body font-semibold text-blush/40 text-xs uppercase tracking-widest mb-5">Explore</p>
            <ul className="flex flex-col gap-3">
              {[['#experience','Our Story'],['#menu','Menu'],['#gallery','Gallery'],['#location','Find Us']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="font-body text-blush/55 hover:text-rose transition-colors text-sm cursor-pointer">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-semibold text-blush/40 text-xs uppercase tracking-widest mb-5">Contact</p>
            <ul className="flex flex-col gap-3 text-sm font-body text-blush/55">
              <li>
                <span className="block">[Your Address]</span>
                <span className="block">Menton, 06500</span>
                <span className="block">Alpes-Maritimes, France</span>
              </li>
              <li><a href="mailto:hello@panea.fr" className="hover:text-rose transition-colors cursor-pointer">hello@panea.fr</a></li>
              <li><a href="tel:+33XXXXXXXXX" className="hover:text-rose transition-colors cursor-pointer">+33 X XX XX XX XX</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blush/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-blush/25">
          <p>© {year} Panèa. All rights reserved. Made with love in Menton.</p>
          <p>Fluffy bites &amp; more · Specialty coffee · Menton, France</p>
        </div>
      </div>
    </footer>
  )
}
