import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SmartImage from './SmartImage'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 160])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-10 bottom-[-80px]">
        <SmartImage src="/images/hero.jpg" alt="Jason and Lucia in Vice City at sunset" eager className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/50" />
      <div className="relative mx-auto w-full max-w-[1500px] px-5 pt-24 sm:px-10 lg:px-16">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-display text-[22vw] leading-[0.82] tracking-wide sm:text-[14vw] lg:text-[11vw]">
          <span className="block text-snow/90 text-[0.4em]">GRAND THEFT</span>
          <span className="block bg-gradient-to-r from-pink via-sunset to-neon bg-clip-text text-transparent">AUTO VI</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 font-display text-3xl tracking-widest sm:text-5xl">WELCOME TO LEONIDA.</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-2 max-w-md text-snow/80">Two hearts. One criminal world. Endless possibilities.</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-8 flex flex-wrap gap-8 font-accent">
          <div><p className="text-xs tracking-widest text-ocean">RELEASE DATE</p><p className="text-xl font-bold">NOVEMBER 19, 2026</p></div>
          <div><p className="text-xs tracking-widest text-ocean">PLATFORMS</p><p className="text-xl font-bold">PLAYSTATION 5 / XBOX SERIES X|S</p></div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#game" className="btn btn-pink">Explore the game</a>
          <a href="#trailers" className="btn btn-line">Watch official trailers</a>
        </motion.div>
      </div>
      <a href="#game" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-snow/80"><ChevronDown size={32} /></a>
    </section>
  )
}
