import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const menuData = {
  'Fluffy Bites': {
    color: 'bg-rose',
    textColor: 'text-pinkdark',
    items: [
      { name: 'Rose Choux Puff',       desc: 'Rose cream, pink mirror glaze',            price: '€4.50' },
      { name: 'Almond Croissant',      desc: 'Twice-baked, frangipane, icing sugar',     price: '€4.20' },
      { name: 'Butter Croissant',      desc: 'Classic, flaky, golden',                   price: '€2.80' },
      { name: 'Pain au Chocolat',      desc: 'Dark chocolate, buttery layers',           price: '€3.20' },
      { name: 'Cardamom Roll',         desc: 'Spiced butter swirl, Swedish-inspired',    price: '€3.80' },
      { name: 'Madeleine (3 pcs)',     desc: 'Classic French, lemon-scented',            price: '€4.20' },
    ],
  },
  Coffee: {
    color: 'bg-pinkdark',
    textColor: 'text-blush-light',
    items: [
      { name: 'Espresso',              desc: 'Single origin, double shot',                price: '€2.80' },
      { name: 'Flat White',            desc: 'Ristretto, microfoam — bold & smooth',     price: '€4.00' },
      { name: 'Cappuccino',            desc: 'Espresso, steamed milk, velvety foam',      price: '€3.80' },
      { name: 'Cortado',               desc: 'Equal parts espresso and warm milk',        price: '€3.60' },
      { name: 'Filter Coffee',         desc: 'Pour-over, rotating single origin',         price: '€4.50' },
      { name: 'Latte',                 desc: 'Espresso, steamed oat or whole milk',       price: '€4.20' },
    ],
  },
  'Cold Drinks': {
    color: 'bg-seablue',
    textColor: 'text-white',
    items: [
      { name: 'Cold Brew',             desc: '18h-steeped, smooth and mellow',           price: '€4.80' },
      { name: 'Iced Matcha Latte',     desc: 'Ceremonial matcha, oat milk, honey',       price: '€5.50' },
      { name: 'Iced Latte',            desc: 'Espresso, milk, over ice',                 price: '€4.80' },
      { name: 'Rose Lemonade',         desc: 'Sparkling, rose syrup, fresh lemon',       price: '€4.50' },
      { name: 'Menton Citrus Soda',   desc: 'Local citrus, sparkling, rosemary',        price: '€4.50' },
    ],
  },
  Brunch: {
    color: 'bg-gold',
    textColor: 'text-pinkdark',
    items: [
      { name: 'Panèa Brunch Plate',   desc: 'Eggs, avocado, sourdough, seasonal greens', price: '€13.50' },
      { name: 'Egg & Soldiers',        desc: 'Soft-boiled eggs, sourdough soldiers',      price: '€8.50' },
      { name: 'Avocado Toast',         desc: 'Smashed avo, seeds, chilli, lemon',         price: '€9.50' },
      { name: 'Açaí Bowl',             desc: 'Açaí, granola, fresh fruit, honey',         price: '€10.00' },
      { name: 'Yoghurt & Granola',     desc: 'Greek yoghurt, house granola, berries',     price: '€7.00' },
    ],
  },
  'Sweet Treats': {
    color: 'bg-mauve',
    textColor: 'text-white',
    items: [
      { name: 'Lemon Tart',            desc: 'Lemon curd, shortbread, torched meringue', price: '€5.00' },
      { name: 'Chocolate Brownie',     desc: 'Dense, fudgy, dark chocolate',             price: '€4.00' },
      { name: 'Seasonal Cake Slice',   desc: 'Changes weekly — ask at the counter',      price: '€5.50' },
      { name: 'Cookie (2 pcs)',         desc: 'Brown butter, sea salt, dark chocolate',   price: '€3.80' },
    ],
  },
}

const categories = Object.keys(menuData)

export default function Menu() {
  const [active, setActive] = useState(categories[0])
  const titleRef = useRef()
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })
  const cat = menuData[active]

  return (
    <section id="menu" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div ref={titleRef}
          initial={{ opacity: 0, y: 40 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block font-craft italic text-2xl text-mauve mb-3">The Panèa Menu</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-pinkdark leading-tight">
            Simple. Fresh. <span className="italic text-gradient-rose">Delicious.</span>
          </h2>
          <p className="font-body text-pinkdark/60 mt-4 text-lg max-w-lg mx-auto">
            Prices and items vary seasonally — everything made from scratch each morning.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 cursor-pointer
                ${active === cat
                  ? `${menuData[cat].color} ${menuData[cat].textColor} shadow-soft scale-105`
                  : 'bg-white text-pinkdark/70 hover:bg-blush border border-rose/15'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl shadow-soft border border-rose/10 overflow-hidden">
            <div className={`${cat.color} ${cat.textColor} px-7 py-5`}>
              <span className="font-display text-xl font-semibold">{active}</span>
            </div>
            <ul className="divide-y divide-rose/10">
              {cat.items.map((item, i) => (
                <motion.li key={item.name}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center justify-between gap-4 px-7 py-5 hover:bg-blush/50 transition-colors">
                  <div>
                    <p className="font-display font-semibold text-pinkdark text-base">{item.name}</p>
                    <p className="font-body text-pinkdark/55 text-sm mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-body font-bold text-mauve text-base shrink-0">{item.price}</span>
                </motion.li>
              ))}
            </ul>
            <div className="px-7 py-4 bg-blush/30 border-t border-rose/10">
              <p className="font-body text-xs text-pinkdark/35 italic text-center">
                Menu items and prices are for reference — visit us for seasonal updates.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
