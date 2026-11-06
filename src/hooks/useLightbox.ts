import { useCallback, useEffect, useState } from 'react'

export function useLightbox(length: number) {
  const [index, setIndex] = useState<number | null>(null)
  const open = useCallback((i: number) => setIndex(i), [])
  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % length)), [length])
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + length) % length)), [length])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, close, next, prev])

  return { index, open, close, next, prev }
}
