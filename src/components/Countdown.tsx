import { useCountdown } from '../hooks/useCountdown'
import SmartImage from './SmartImage'

export default function Countdown() {
  const t = useCountdown()
  const cells: [string, number][] = [['Days', t.days], ['Hours', t.hours], ['Minutes', t.minutes], ['Seconds', t.seconds]]
  return (
    <section id="countdown" className="relative overflow-hidden py-32">
      <SmartImage src="/images/countdown.jpg" alt="Vice City at sunset" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night/60 to-night" />
      <div className="relative px-5 text-center">
        {t.released ? (
          <h2 className="h-xl text-pink">Welcome to Leonida.</h2>
        ) : (
          <>
            <h2 className="h-xl">The wait is almost over.</h2>
            <p className="mt-3 font-accent tracking-widest text-ocean">NOVEMBER 19, 2026</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-8" role="timer" aria-live="off">
              {cells.map(([label, value]) => (
                <div key={label} className="min-w-[72px] border border-pink/50 bg-night/60 px-4 py-5 backdrop-blur sm:min-w-[130px]">
                  <p className="font-display text-5xl tabular-nums text-pink sm:text-7xl">{String(value).padStart(2, '0')}</p>
                  <p className="font-accent text-xs tracking-widest">{label.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
