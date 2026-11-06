import { features } from '../data/features'
import SmartImage from './SmartImage'

const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-12']

export default function GameFeatures() {
  return (
    <section id="world" className="section">
      <p className="tag">Game world</p>
      <h2 className="h-xl mt-3">More than <span className="text-sunset">just a game.</span></h2>
      <div className="mt-12 grid gap-4 lg:grid-cols-12">
        {features.map((f, i) => (
          <article key={f.id} className={`group relative h-80 overflow-hidden ${spans[i]}`}>
            <SmartImage src={f.image} alt={f.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="font-display text-3xl text-pink">{f.title}</h3>
              <p className="max-w-md text-sm text-snow/80">{f.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
