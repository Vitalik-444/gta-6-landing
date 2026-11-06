import { useMemo, useState } from 'react'
import { gallery } from '../data/gallery'
import { GalleryCategory } from '../types'

export function useGalleryFilter() {
  const [active, setActive] = useState<'ALL' | GalleryCategory>('ALL')
  const items = useMemo(() => (active === 'ALL' ? gallery : gallery.filter((g) => g.category === active)), [active])
  return { active, setActive, items }
}
