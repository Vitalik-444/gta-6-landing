import { Character } from '../types'

const generic = 'Part of the cast of Grand Theft Auto VI. See the official character page on rockstargames.com/VI for the full profile.'

export const characters: Character[] = [
  {
    id: 'jason',
    name: 'Jason Duval',
    role: 'Lead protagonist. Jason has always known life was not stacked in his favor. After a deal goes wrong he is pulled into a statewide criminal conspiracy in Leonida and has to rely on Lucia to survive.',
    image: '/images/characters/jason.jpg',
    featured: true
  },
  {
    id: 'lucia',
    name: 'Lucia Caminos',
    role: 'Lead protagonist. Lucia has always known life was not stacked in her favor. After a deal goes wrong she is pulled into a statewide criminal conspiracy in Leonida and has to rely on Jason to survive.',
    image: '/images/characters/lucia.jpg',
    featured: true
  },
  { id: 'cal', name: 'Cal Hampton', role: generic, image: '/images/characters/cal.jpg' },
  { id: 'boobie', name: 'Boobie Ike', role: generic, image: '/images/characters/boobie.jpg' },
  { id: 'priest', name: "Dre'Quan Priest", role: generic, image: '/images/characters/priest.jpg' },
  { id: 'dimez', name: 'Real Dimez', role: generic, image: '/images/characters/dimez.jpg' },
  { id: 'raul', name: 'Raul Bautista', role: generic, image: '/images/characters/raul.jpg' },
  { id: 'brian', name: 'Brian Heder', role: generic, image: '/images/characters/brian.jpg' }
]
