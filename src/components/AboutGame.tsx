import { motion } from 'framer-motion'
import SmartImage from './SmartImage'

const facts: [string, string][] = [
  ['Developer', 'Rockstar Games'],
  ['Publisher', 'Rockstar Games'],
  ['Genre', 'Open World / Action-Adventure'],
  ['Setting', 'Leonida (fictional state)'],
  ['Main city', 'Vice City'],
  ['Protagonists', 'Jason Duval & Lucia Caminos'],
  ['Release', 'November 19, 2026'],
  ['Platforms', 'PlayStation 5, Xbox Series X|S']
]

export default function AboutGame() {
  return (
    <section id="game" className="section">
      <div className="grid gap-12 lg:grid-cols-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6">
          <p className="tag">About the game</p>
          <h2 className="h-xl mt-3">A new era of <span className="text-pink">Grand Theft Auto.</span></h2>
          <p className="mt-6 max-w-xl text-lg text-snow/80">Jason and Lucia have always known the odds were stacked against them. After a deal gone wrong, they are drawn into a criminal conspiracy that stretches across the state of Leonida, and must rely on each other to survive.</p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-pink/40 pt-6">
            {facts.map(([k, v]) => (
              <div key={k}><dt className="font-accent text-xs tracking-widest text-ocean">{k.toUpperCase()}</dt><dd className="font-semibold">{v}</dd></div>
            ))}
          </dl>
        </motion.div>
        <div className="relative lg:col-span-6">
          <SmartImage src="/images/about-1.jpg" alt="Grand Theft Auto VI screenshot" className="aspect-[16/10] w-full object-cover shadow-[0_0_50px_#8B5CF655]" />
          <SmartImage src="/images/about-2.jpg" alt="Grand Theft Auto VI screenshot" className="-mt-12 ml-auto aspect-[4/3] w-3/5 border-4 border-night object-cover shadow-[0_0_40px_#FF4FA355]" />
        </div>
      </div>
    </section>
  )
}
