import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { LightboxImage } from '../types'
import SmartImage from './SmartImage'

interface Props {
  items: LightboxImage[]
  index: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ items, index, onClose, onNext, onPrev }: Props) {
  const item = items[index]
  return (
    <motion.div role="dialog" aria-modal="true" aria-label={item.alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4" onClick={onClose}>
      <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-navy p-3 hover:text-pink"><X /></button>
      <button onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous" className="absolute left-3 rounded-full bg-navy p-3 hover:text-pink"><ChevronLeft /></button>
      <button onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next" className="absolute right-3 rounded-full bg-navy p-3 hover:text-pink"><ChevronRight /></button>
      <motion.div key={item.src} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="max-h-[88vh] max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
        <SmartImage src={item.src} alt={item.alt} eager className="max-h-[88vh] min-h-[40vh] max-w-[92vw] object-contain" />
      </motion.div>
      <p className="absolute bottom-4 font-accent text-xs tracking-widest text-snow/70">{index + 1} / {items.length}</p>
    </motion.div>
  )
}
