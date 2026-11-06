import { AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { locations } from '../data/locations'
import { useLightbox } from '../hooks/useLightbox'
import Lightbox from './Lightbox'
import SmartImage from './SmartImage'

const spans = ['md:col-span-4 md:row-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-3', 'md:col-span-3', 'md:col-span-6']
const items = locations.map((l) => ({ src: l.image, alt: l.name }))

export default function Locations() {
  const lb = useLightbox(items.length)
  return (
    <section id="locations" className="section">
      <p className="tag">Explore Leonida</p>
      <h2 className="h-xl mt-3">One state. <span className="text-ocean">Countless stories.</span></h2>
      <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-6">
        {locations.map((l, i) => (
          <button key={l.id} onClick={() => lb.open(i)} className={`group relative overflow-hidden text-left ${spans[i]}`}>
            <SmartImage src={l.image} alt={l.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="flex items-center gap-2 font-display text-4xl text-snow/90 transition-colors group-hover:text-pink">{l.name}<ArrowUpRight className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></h3>
              <p className="max-h-0 overflow-hidden text-sm opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">{l.text}</p>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>{lb.index !== null && <Lightbox items={items} index={lb.index} onClose={lb.close} onNext={lb.next} onPrev={lb.prev} />}</AnimatePresence>
    </section>
  )
}
