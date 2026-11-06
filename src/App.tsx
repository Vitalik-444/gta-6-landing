import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutGame from './components/AboutGame'
import Characters from './components/Characters'
import Locations from './components/Locations'
import Trailers from './components/Trailers'
import Gallery from './components/Gallery'
import GameFeatures from './components/GameFeatures'
import News from './components/News'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <AboutGame />
        <Characters />
        <Locations />
        <Trailers />
        <Gallery />
        <GameFeatures />
        <News />
        <Countdown />
      </main>
      <Footer />
      <ScrollToTop />
    </MotionConfig>
  )
}
