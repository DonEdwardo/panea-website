import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const photos = [
  { src: '/images/panea-pastry.jpg',   alt: 'Fresh pastries at Panèa',    caption: 'Freshly baked this morning', span: 'row-span-2' },
  { src: '/images/panea-coffee.jpg',   alt: 'Specialty coffee at Panèa',  caption: 'The perfect flat white',     span: '' },
  { src: '/images/panea-choux.jpg',    alt: 'Rose choux puff',            caption: 'Our signature choux',        span: '' },
  { src: '/images/panea-brunch.jpg',   alt: 'Panèa brunch plate',         caption: 'Weekend brunch vibes',       span: 'col-span-2' },
  { src: '/images/panea-interior.jpg', alt: 'Inside Panèa',               caption: 'Your corner in Menton',      span: '' },
  { src: '/images/panea-matcha.jpg',   alt: 'Iced matcha latte',          caption: 'Iced matcha love',           span: '' },
  { src: '/images/panea-tart.jpg',     alt: 'Lemon tart',                 caption: 'Lemon tart, Menton style',   span: '' },
  { src: '/images/panea-croissant.jpg',alt: 'Almond croissant',           caption: 'Almond croissant dream',     span: '' },
]

function PhotoCard({ photo, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${photo.span}`}
      style={{ minHeight: '180px', background: 'linear-gradient(135deg, #FAD5DE 0%, #FFF0F4 100%)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={photo.src} alt={photo.alt} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ minHeight: '180px' }}
        onError={(e) => { e.target.style.display = 'none' }} />

      {/* Placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
        <svg className="w-10 h-10 text-pinkdark/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>
        <span className="text-xs font-body text-pinkdark/30 text-center px-3">{photo.src}</span>
      </div>

      {/* Hover overlay */}
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-pinkdark/75 via-pinkdark/20 to-transparent z-10">
        <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
          <p className="font-body font-semibold text-white text-sm">{photo.caption}</p>
          <a href="https://www.instagram.com/panea.fr/" target="_blank" rel="noopener noreferrer"
            aria-label="View on Instagram"
            className="text-white/80 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const titleRef = useRef()
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-blush overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div ref={titleRef}
          initial={{ opacity: 0, y: 40 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block font-craft italic text-2xl text-mauve mb-3">@panea.fr</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-pinkdark leading-tight">
            Life through <span className="italic text-gradient-rose">our lens</span>
          </h2>
          <p className="font-body text-pinkdark/60 mt-4 text-lg max-w-xl mx-auto">
            Follow us on Instagram for daily doses of fluffy pastries, specialty coffee
            and Menton sunshine.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3 lg:gap-4">
          {photos.map((p, i) => <PhotoCard key={p.src} photo={p} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12">
          <a href="https://www.instagram.com/panea.fr/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white
                       px-8 py-4 rounded-full font-body font-semibold shadow-soft hover:shadow-rose hover:-translate-y-1
                       transition-all duration-300 cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @panea.fr on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
