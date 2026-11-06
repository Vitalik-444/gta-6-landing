export type GalleryCategory = 'CHARACTERS' | 'VICE CITY' | 'VEHICLES' | 'NATURE' | 'GAME WORLD'

export interface Character {
  id: string
  name: string
  role: string
  image: string
  featured?: boolean
}

export interface Location {
  id: string
  name: string
  text: string
  image: string
}

export interface Trailer {
  id: string
  title: string
  date: string
  length: string
  text: string
  videoId?: string
  thumb?: string
  pageUrl: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  ratio: string
}

export interface NewsItem {
  id: string
  title: string
  date: string
  text: string
  image: string
  url: string
}

export interface Feature {
  id: string
  title: string
  text: string
  image: string
}

export interface LightboxImage {
  src: string
  alt: string
}
