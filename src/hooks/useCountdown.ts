import { useEffect, useState } from 'react'
import { timeLeft } from '../utils/countdown'

export function useCountdown() {
  const [value, setValue] = useState(timeLeft())
  useEffect(() => {
    const id = window.setInterval(() => setValue(timeLeft()), 1000)
    return () => window.clearInterval(id)
  }, [])
  return value
}
