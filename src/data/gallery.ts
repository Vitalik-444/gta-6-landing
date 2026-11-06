import { GalleryCategory, GalleryItem } from '../types'

const plan: [GalleryCategory, string][] = [
  ['CHARACTERS', '4/5'], ['VICE CITY', '16/10'], ['VEHICLES', '16/9'], ['NATURE', '4/5'], ['GAME WORLD', '1/1'],
  ['VICE CITY', '4/5'], ['CHARACTERS', '16/10'], ['NATURE', '16/9'], ['VEHICLES', '4/5'], ['GAME WORLD', '16/10'],
  ['VICE CITY', '1/1'], ['CHARACTERS', '4/5'], ['NATURE', '16/10'], ['VEHICLES', '1/1'], ['GAME WORLD', '4/5'],
  ['VICE CITY', '16/9'], ['NATURE', '4/5'], ['CHARACTERS', '16/9']
]

export const categories: ('ALL' | GalleryCategory)[] = ['ALL', 'CHARACTERS', 'VICE CITY', 'VEHICLES', 'NATURE', 'GAME WORLD']

export const gallery: GalleryItem[] = plan.map(([category, ratio], i) => {
  const n = String(i + 1).padStart(2, '0')
  return { id: n, src: `/images/gallery/gta6-${n}.jpg`, alt: `Grand Theft Auto VI screenshot ${n}`, category, ratio }
})
