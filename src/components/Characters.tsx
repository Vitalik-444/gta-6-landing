import { memo } from 'react'
import { motion } from 'framer-motion'
import { characters } from '../data/characters'
import { Character } from '../types'
import SmartImage from './SmartImage'

const Featured = memo(({ c, flip }: { c: Character; flip: boolean }) => (
  <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`group relative grid overflow-hidden bg-navy md:grid-cols-2 ${flip ? 'md:[&>div:first-child]:order-2' : ''}`}>
    <div className="overflow-hidden">
      <SmartImage src={c.image} alt={c.name} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-auto" />
    </div>
    <div className="flex flex-col justify-center p-8 lg:p-14">
      <h3 className="font-display text-6xl text-pink lg:text-8xl">{c.name}</h3>
      <p className="mt-4 text-snow/80">{c.role}</p>
    </div>
  </motion.article>
))

const Compact = memo(({ c }: { c: Character }) => (
  <article tabIndex={0} className="group relative aspect-[3/4] overflow-hidden bg-navy focus-visible:outline">
    <SmartImage src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus-visible:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-5">
      <h3 className="font-display text-3xl">{c.name}</h3>
      <p className="max-h-0 overflow-hidden text-sm text-snow/80 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-focus-visible:max-h-40 group-focus-visible:opacity-100">{c.role}</p>
    </div>
  </article>
))

export default function Characters() {
  return (
    <section id="characters" className="section">
      <p className="tag">Main characters</p>
      <h2 className="h-xl mt-3">Meet the people of <span className="text-sunset">Leonida.</span></h2>
      <div className="mt-12 space-y-6">
        {characters.filter((c) => c.featured).map((c, i) => <Featured key={c.id} c={c} flip={i % 2 === 1} />)}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {characters.filter((c) => !c.featured).map((c) => <Compact key={c.id} c={c} />)}
      </div>
    </section>
  )
}
