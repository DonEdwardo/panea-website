import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    name: 'Rose Choux Puff',
    category: 'Fluffy Bites',
    desc: 'Crisp choux shell, rose cream filling, glazed with a pink mirror finish. Pure cloud.',
    price: '€4.50',
    gradient: 'from-rose to-mauve',
    badge: 'Signature',
    badgeColor: 'bg-pinkdark text-blush-light',
    image: '/images/panea-choux.jpg',
    emoji: '🌸',
  },
  {
    name: 'Almond Croissant',
    category: 'Fluffy Bites',
    desc: 'Twice-baked, filled with almond frangipane, dusted with icing sugar. Our best-seller.',
    price: '€4.20',
    gradient: 'from-gold to-rose',
    badge: 'Best Seller',
    badgeColor: 'bg-rose text-pinkdark',
    image: '/images/panea-croissant.jpg',
    emoji: '🥐',
  },
  {
    name: 'Flat White',
    category: 'Coffee',
    desc: 'Silky ristretto with microfoam milk — bold, smooth, and never bitter.',
    price: '€4.00',
    gradient: 'from-pinkdark to-mauve-dark',
    badge: 'Morning Must',
    badgeColor: 'bg-gold text-pinkdark',
    image: '/images/panea-coffee.jpg',
    emoji: '☕',
  },
  {
    name: 'Iced Matcha Latte',
    category: 'Cold Drinks',
    desc: 'Ceremonial grade matcha, oat milk, a hint of honey. Cool, bright, and grounding.',
    price: '€5.50',
    gradient: 'from-sage to-seablue',
    badge: 'Fan Favourite',
    badgeColor: 'bg-sage text-white',
    image: '/images/panea-matcha.jpg',
    emoji: '🍵',
  },
  {
    name: 'Brunch Plate',
    category: 'Brunch',
    desc: 'Sourdough toast, soft-boiled eggs, avocado, seasonal greens. Weekend perfection.',
    price: '€13.50',
    gradient: 'from-gold-dark to-pinkdark',
    badge: 'Weekend Only',
    badgeColor: 'bg-mauve text-white',
    image: '/images/panea-brunch.jpg',
    emoji: '🍳',
  },
  {
    name: 'Lemon Tart',
    category: 'Sweet Treats',
    desc: 'Silky lemon curd, crisp shortbread shell, torched meringue. A Menton classic.',
    price: '€5.00',
    gradient: 'from-gold-light to-rose-light',
    badge: 'Menton Special',
    badgeColor: 'bg-gold text-pinkdark',
    image: '/images/panea-tart.jpg',
    emoji: '🍋',
  },
]

function ProductCard({ product, index }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)
    const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)
    setTilt({ x: dy * -10, y: dx * 10 })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(8px)`
          : 'perspective(800px) rotateX(0) rotateY(0)',
        transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      className="rounded-3xl overflow-hidden bg-white shadow-soft border border-rose/10 cursor-pointer group"
    >
      {/* Image / gradient top */}
      <div className={`relative h-48 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
        <img src={product.image} alt={product.name} loading="lazy"
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl select-none" style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))' }}>
            {product.emoji}
          </span>
        </div>
        <span className={`absolute top-3 right-3 text-xs font-body font-bold px-3 py-1 rounded-full ${product.badgeColor}`}>
          {product.badge}
        </span>
        <span className="absolute bottom-3 left-3 text-white/75 text-xs font-body uppercase tracking-widest">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-pinkdark text-lg font-semibold leading-tight">{product.name}</h3>
          <span className="font-body font-bold text-rose-deep text-lg shrink-0">{product.price}</span>
        </div>
        <p className="font-body text-pinkdark/60 text-sm leading-relaxed">{product.desc}</p>

        <motion.div animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }} className="overflow-hidden mt-3">
          <a href="#menu" className="inline-flex items-center gap-1.5 text-pinkdark font-body font-semibold text-sm hover:text-rose-deep transition-colors cursor-pointer">
            See full menu
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const titleRef = useRef()
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-blush to-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div ref={titleRef}
          initial={{ opacity: 0, y: 40 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block font-craft italic text-2xl text-mauve mb-3">
            Made with love
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-pinkdark leading-tight">
            Our <span className="italic text-gradient-rose">featured</span> delights
          </h2>
          <p className="font-body text-pinkdark/60 mt-4 text-lg max-w-xl mx-auto">
            From the first coffee of the morning to the last sweet bite — crafted fresh,
            served with joy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => <ProductCard key={p.name} product={p} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a href="#menu"
            className="inline-flex items-center gap-2 bg-pinkdark text-blush-light px-8 py-4 rounded-full font-body font-semibold text-base
                       shadow-soft hover:shadow-rose hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:bg-pinkdark-light">
            View the Full Menu
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
