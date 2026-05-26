import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PaneaLogo    from './components/PaneaLogo'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Experience   from './components/Experience'
import Products     from './components/Products'
import Gallery      from './components/Gallery'
import Menu         from './components/Menu'
import Location     from './components/Location'
import Footer       from './components/Footer'

function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1900)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-7"
      style={{ background: 'linear-gradient(150deg, #FFF7F8 0%, #FAD5DE 50%, #FFF0F4 100%)' }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <PaneaLogo size={96} showTagline={true} />
      </motion.div>

      {/* Progress ring */}
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="20" r="17" fill="none" stroke="#FAD5DE" strokeWidth="3" />
          <motion.circle cx="20" cy="20" r="17" fill="none"
            stroke="#C4859A" strokeWidth="3" strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 17}
            initial={{ strokeDashoffset: 2 * Math.PI * 17 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
        </svg>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="font-craft italic text-xl text-mauve">
        Something fluffy is coming…
      </motion.p>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Products />
            <Gallery />
            <Menu />
            <Location />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
