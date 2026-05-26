import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const vibes = [
  {
    title: 'Fluffy Bites',
    desc: 'Choux puffs, croissants, and cloud-soft pastries baked in-house every morning — each one a little piece of joy.',
    bg: 'bg-pinkdark',
    text: 'text-blush-light',
    accent: 'text-rose',
    image: '/images/panea-pastry.jpg',
    tag: 'Baked this morning',
  },
  {
    title: 'Specialty Coffee',
    desc: 'Single-origin espresso, gentle pour-overs, and dreamy lattes — your perfect cup, every time.',
    bg: 'bg-rose',
    text: 'text-pinkdark',
    accent: 'text-pinkdark-light',
    image: '/images/panea-coffee.jpg',
    tag: 'Sourced with care',
  },
  {
    title: 'Brunch in the Sun',
    desc: 'Lazy weekend mornings made beautiful. Soft eggs, sourdough toast, seasonal fruit and good company.',
    bg: 'bg-gold',
    text: 'text-pinkdark',
    accent: 'text-pinkdark-light',
    image: '/images/panea-brunch.jpg',
    tag: 'Weekend ritual',
  },
  {
    title: 'The Panèa Feeling',
    desc: 'A cosy corner in the French Riviera where time slows down and every bite tastes like it was made for you.',
    bg: 'bg-mauve',
    text: 'text-blush-light',
    accent: 'text-blush',
    image: '/images/panea-interior.jpg',
    tag: 'Your place in Menton',
  },
]

function VibeCard({ item, index }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className={`rounded-3xl overflow-hidden shadow-soft ${item.bg} group cursor-pointer`}
    >
      {/* Photo */}
      <div className="relative h-52 overflow-hidden">
        <img src={item.image} alt={item.title} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-95"
          onError={(e) => { e.target.style.display = 'none' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <svg className="w-10 h-10 opacity-20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <p className="text-xs opacity-40 mt-1 font-body text-center px-3">{item.image}</p>
        </div>
        <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full border border-white/30">
          {item.tag}
        </span>
      </div>

      <div className={`p-6 ${item.text}`}>
        <h3 className={`font-display text-xl font-semibold ${item.accent} mb-2`}>{item.title}</h3>
        <p className="font-body text-sm leading-relaxed opacity-85">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const titleRef = useRef()
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-24 lg:py-32 bg-blush overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div ref={titleRef}
          initial={{ opacity: 0, y: 40 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block font-craft italic text-2xl text-mauve mb-3">
            Life at Panèa
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-pinkdark leading-tight">
            More than a café —
            <br />
            <span className="italic text-gradient-rose">a sweet ritual</span>
          </h2>
          <p className="font-body text-pinkdark/60 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            Nestled in the sun-kissed streets of Menton, Panèa is where fluffy pastries
            meet specialty coffee and the unhurried rhythm of the Riviera.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vibes.map((item, i) => <VibeCard key={item.title} item={item} index={i} />)}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-pinkdark via-mauve-dark to-rose-deep p-px shadow-rose"
        >
          <div className="rounded-3xl bg-blush-light px-8 py-10 lg:py-14 text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-pinkdark leading-relaxed max-w-3xl mx-auto">
              "Every bite should feel like a warm hug — light, joyful, made with love."
            </p>
            <p className="font-craft text-xl text-mauve mt-5">— L'équipe Panèa</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
