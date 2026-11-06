export const RELEASE_DATE = new Date(2026, 10, 19, 0, 0, 0)

export function timeLeft(now: number = Date.now()) {
  const diff = RELEASE_DATE.getTime() - now
  if (diff <= 0) return { released: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  const s = Math.floor(diff / 1000)
  return { released: false, days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 }
}

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
