import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Play } from 'lucide-react'
import { navItems } from '../data/nav'
import { useScrollY } from '../hooks/useScrollY'

export default function Header() {
  const y = useScrollY()
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState<string | null>(null)
  const scrolled = y > 40

  return (
    <header className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'h-14 bg-night/85 border-b border-pink/30' : 'h-20 bg-night/30'}`}>
      <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 sm:px-10 lg:px-16">
        <a href="#home" className="font-display text-2xl tracking-wider" aria-label="GTA VI Fan Portal">
          GTA <span className="text-pink">VI</span> <span className="text-snow/60">— FAN PORTAL</span>
        </a>
        <nav className="hidden xl:flex" aria-label="Main" onMouseLeave={() => setHover(null)}>
          {navItems.map((n) => (
            <a key={n.href} href={n.href} onMouseEnter={() => setHover(n.href)} className="relative px-4 py-2 font-accent text-xs font-bold tracking-widest text-snow/80 hover:text-snow">
              {hover === n.href && <motion.span layoutId="nav-ind" className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-pink shadow-[0_0_10px_#FF4FA3]" />}
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#trailers" className="btn btn-pink hidden !py-2 sm:inline-flex"><Play size={14} /> Watch trailers</a>
          <button className="xl:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-x-0 top-full flex flex-col bg-night/95 px-5 py-4 xl:hidden" aria-label="Mobile">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-snow/10 py-3 font-display text-2xl tracking-wider">{n.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
