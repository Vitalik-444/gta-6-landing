import { ArrowUp } from 'lucide-react'
import { scrollToTop } from '../utils/countdown'

const links = [
  ['Rockstar Games', 'https://www.rockstargames.com'],
  ['Official GTA VI Website', 'https://www.rockstargames.com/VI'],
  ['YouTube', 'https://www.youtube.com/rockstargames'],
  ['Instagram', 'https://instagram.com/rockstargames']
]

export default function Footer() {
  return (
    <footer className="border-t border-pink/30 bg-navy">
      <div className="section !py-16">
        <h2 className="h-xl bg-gradient-to-r from-pink via-sunset to-neon bg-clip-text text-transparent">See you in Vice City.</h2>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {links.map(([label, href]) => (
            <li key={label}><a href={href} target="_blank" rel="noreferrer" className="font-accent text-sm font-bold tracking-widest hover:text-pink">{label.toUpperCase()}</a></li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-snow/10 pt-6 text-xs text-snow/60 md:flex-row">
          <p className="max-w-3xl">This is an independent fan-made project. It is not affiliated with, endorsed by or connected to Rockstar Games or Take-Two Interactive. Grand Theft Auto VI and all related names, images and videos are the property of their respective owners.</p>
          <button onClick={scrollToTop} className="btn btn-line self-start !py-2 text-snow">Back to top <ArrowUp size={14} /></button>
        </div>
        <p className="mt-4 text-xs text-snow/40">© 2026 GTA VI Fan Portal. All rights to Grand Theft Auto VI belong to Rockstar Games.</p>
      </div>
    </footer>
  )
}
