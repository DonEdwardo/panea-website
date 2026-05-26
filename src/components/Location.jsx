import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const hours = [
  { day: 'Monday',    time: '8:00 – 17:00' },
  { day: 'Tuesday',   time: '8:00 – 17:00' },
  { day: 'Wednesday', time: '8:00 – 17:00' },
  { day: 'Thursday',  time: '8:00 – 17:00' },
  { day: 'Friday',    time: '8:00 – 18:00' },
  { day: 'Saturday',  time: '9:00 – 18:00' },
  { day: 'Sunday',    time: '9:00 – 16:00' },
]

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

export default function Location() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="location" className="py-24 lg:py-32 bg-gradient-to-b from-cream to-blush overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block font-craft italic text-2xl text-mauve mb-3">Come find us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-pinkdark leading-tight">
            Find us in{' '}
            <span className="italic text-gradient-rose">Menton</span>
          </h2>
          <p className="font-body text-pinkdark/60 mt-4 text-lg max-w-xl mx-auto">
            Right in the heart of Menton — follow the scent of warm pastries
            and freshly brewed coffee.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-soft border border-rose/20 min-h-[340px] relative">
            <iframe title="Panèa in Menton" src="https://maps.google.com/maps?q=Menton,+France&output=embed"
              width="100%" height="100%" style={{ border: 0, minHeight: '340px' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full" />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-rose border border-rose/20 max-w-[220px] z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-rose flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-pinkdark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-pinkdark text-sm">Panèa</p>
                  <p className="font-body text-pinkdark/50 text-xs">Menton, France</p>
                </div>
              </div>
              <p className="font-body text-pinkdark/60 text-xs leading-relaxed">
                [Address] — Menton, 06500<br/>Alpes-Maritimes, France
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-rose/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-rose/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-mauve" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-pinkdark text-base mb-1">Address</p>
                  {/* REPLACE with actual address */}
                  <p className="font-body text-pinkdark/65 text-sm leading-relaxed">
                    [Your Street Address]<br/>Menton, 06500<br/>Alpes-Maritimes, France
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-rose/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-mauve" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
                  </svg>
                </div>
                <p className="font-display font-semibold text-pinkdark text-base">Opening Hours</p>
              </div>
              <ul className="space-y-2">
                {hours.map(({ day, time }) => (
                  <li key={day}
                    className={`flex justify-between items-center text-sm font-body rounded-xl px-3 py-1.5 transition-colors
                      ${day === today ? 'bg-rose/20 text-pinkdark font-semibold' : 'text-pinkdark/65'}`}>
                    <span>{day}</span>
                    <span className={day === today ? 'text-mauve font-bold' : ''}>{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-pinkdark rounded-3xl p-6 text-blush-light">
              <p className="font-display font-semibold text-rose text-base mb-4">Get in Touch</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@panea.fr" className="flex items-center gap-3 hover:text-rose transition-colors cursor-pointer text-sm font-body">
                  <svg className="w-4 h-4 opacity-60 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  hello@panea.fr {/* Replace */}
                </a>
                <a href="tel:+33XXXXXXXXX" className="flex items-center gap-3 hover:text-rose transition-colors cursor-pointer text-sm font-body">
                  <svg className="w-4 h-4 opacity-60 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +33 X XX XX XX XX {/* Replace */}
                </a>
                <a href="https://www.instagram.com/panea.fr/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-rose transition-colors cursor-pointer text-sm font-body">
                  <svg className="w-4 h-4 opacity-60 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @panea.fr
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center">
          <a href="https://maps.google.com/?q=Menton+France" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose text-pinkdark px-7 py-3.5 rounded-full font-body font-semibold text-base
                       shadow-rose hover:shadow-warm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer hover:bg-rose-dark">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
