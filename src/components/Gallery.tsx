import { AnimatePresence, motion } from 'framer-motion'
import { categories, gallery } from '../data/gallery'
import { useGalleryFilter } from '../hooks/useGalleryFilter'
import { useLightbox } from '../hooks/useLightbox'
import Lightbox from './Lightbox'
import SmartImage from './SmartImage'

export default function Gallery() {
  const { active, setActive, items } = useGalleryFilter()
  const lb = useLightbox(items.length)
  return (
    <section id="gallery" className="section">
      <p className="tag">Screenshot gallery</p>
      <h2 className="h-xl mt-3">A closer look at <span className="text-pink">Leonida.</span></h2>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)} className={`px-4 py-2 font-accent text-xs font-bold tracking-widest transition-colors ${active === c ? 'bg-pink text-night' : 'border border-snow/30 hover:border-pink hover:text-pink'}`}>{c}</button>
        ))}
      </div>
      <motion.div layout className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((g, i) => (
          <motion.button layout key={g.id} onClick={() => lb.open(i)} aria-label={`Open ${g.alt}`} className="group relative mb-4 block w-full overflow-hidden" style={{ aspectRatio: g.ratio }}>
            <SmartImage src={g.src} alt={g.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <span className="absolute inset-0 bg-pink/0 shadow-[inset_0_0_0_0_#FF4FA3] transition-all duration-300 group-hover:bg-pink/10 group-hover:shadow-[inset_0_0_0_3px_#FF4FA3]" />
          </motion.button>
        ))}
      </motion.div>
      <p className="mt-2 text-xs text-snow/50">{items.length} of {gallery.length} screenshots</p>
      <AnimatePresence>{lb.index !== null && <Lightbox items={items.map((g) => ({ src: g.src, alt: g.alt }))} index={lb.index} onClose={lb.close} onNext={lb.next} onPrev={lb.prev} />}</AnimatePresence>
    </section>
  )
}
