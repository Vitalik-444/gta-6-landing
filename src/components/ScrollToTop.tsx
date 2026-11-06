import { ArrowUp } from 'lucide-react'
import { useScrollY } from '../hooks/useScrollY'
import { scrollToTop } from '../utils/countdown'

export default function ScrollToTop() {
  const y = useScrollY()
  if (y < 700) return null
  return (
    <button onClick={scrollToTop} aria-label="Back to top" className="fixed bottom-5 right-5 z-40 rounded-full bg-pink p-3 text-night shadow-[0_0_24px_#FF4FA3] transition-transform hover:-translate-y-1">
      <ArrowUp />
    </button>
  )
}
