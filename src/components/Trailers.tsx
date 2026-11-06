import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { trailers } from '../data/trailers'
import { Trailer } from '../types'
import SmartImage from './SmartImage'
import YouTubePlayer from './YouTubePlayer'

function Card({ t, big }: { t: Trailer; big?: boolean }) {
  const [playing, setPlaying] = useState(false)
  const thumb = t.videoId ? `https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg` : t.thumb ?? ''
  const search = `https://www.youtube.com/results?search_query=${encodeURIComponent(t.title)}`

  return (
    <article className="group">
      <div className="relative aspect-video overflow-hidden bg-navy">
        {playing && t.videoId ? (
          <YouTubePlayer videoId={t.videoId} title={t.title} />
        ) : (
          <>
            <SmartImage src={thumb} alt={t.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-night/30" />
            {t.videoId ? (
              <button onClick={() => setPlaying(true)} aria-label={`Play ${t.title}`} className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-pink p-5 text-night shadow-[0_0_40px_#FF4FA3] transition-transform group-hover:scale-110"><Play fill="currentColor" size={big ? 36 : 24} /></span>
              </button>
            ) : (
              <a href={search} target="_blank" rel="noreferrer" aria-label={`Watch ${t.title} on YouTube`} className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-pink p-5 text-night shadow-[0_0_40px_#FF4FA3]"><ExternalLink size={big ? 36 : 24} /></span>
              </a>
            )}
          </>
        )}
      </div>
      <div className="mt-3">
        {playing && t.videoId && <button type="button" onClick={() => setPlaying(false)} className="mb-2 font-accent text-xs tracking-widest text-ocean hover:text-pink">CLOSE PLAYER</button>}
        <h3 className={`font-display tracking-wide ${big ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>{t.title}</h3>
        <p className="font-accent text-xs tracking-widest text-ocean">{t.date}{t.length && ` • ${t.length}`}</p>
        <p className="mt-2 text-sm text-snow/70">{t.text}</p>
        <a href={t.videoId ? `https://www.youtube.com/watch?v=${t.videoId}` : t.pageUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 font-accent text-xs font-bold tracking-widest text-pink hover:text-sunset">WATCH ON YOUTUBE <ExternalLink size={12} /></a>
      </div>
    </article>
  )
}

export default function Trailers() {
  const [first, ...rest] = trailers
  return (
    <section id="trailers" className="bg-gradient-to-b from-night via-navy to-night">
      <div className="section">
        <p className="tag">Official trailers</p>
        <h2 className="h-xl mt-3">Watch the world of <span className="text-neon">GTA VI.</span></h2>
        <div className="mt-12"><Card t={first} big /></div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">{rest.map((t) => <Card key={t.id} t={t} />)}</div>
      </div>
    </section>
  )
}
