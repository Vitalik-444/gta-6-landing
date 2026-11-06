import { ArrowUpRight } from 'lucide-react'
import { news } from '../data/news'
import { formatDate } from '../utils/countdown'
import SmartImage from './SmartImage'

export default function News() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date))
  return (
    <section id="news" className="section">
      <p className="tag">Latest news</p>
      <h2 className="h-xl mt-3">Latest from <span className="text-ocean">Rockstar.</span></h2>
      <div className="mt-12 divide-y divide-snow/10 border-y border-snow/10">
        {sorted.map((n) => (
          <a key={n.id} href={n.url} target="_blank" rel="noreferrer" className="group grid items-center gap-6 py-6 md:grid-cols-[260px_1fr_auto]">
            <div className="aspect-video overflow-hidden"><SmartImage src={n.image} alt={n.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
            <div>
              <p className="font-accent text-xs tracking-widest text-pink">{formatDate(n.date)}</p>
              <h3 className="font-display text-3xl transition-colors group-hover:text-ocean">{n.title}</h3>
              <p className="mt-1 max-w-2xl text-sm text-snow/70">{n.text}</p>
            </div>
            <ArrowUpRight className="hidden transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:block" />
          </a>
        ))}
      </div>
      <a href="https://www.rockstargames.com/newswire" target="_blank" rel="noreferrer" className="btn btn-line mt-8">Rockstar Newswire <ArrowUpRight size={16} /></a>
    </section>
  )
}
