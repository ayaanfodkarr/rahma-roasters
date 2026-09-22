import useSmoothScroll from './hooks/useSmoothScroll'
import useReveal from './hooks/useReveal'

import Navbar from './components/Navbar'
import ShowcaseCup from './components/ShowcaseCup'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Why from './components/Why'
import Finale from './components/Finale'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  useSmoothScroll()
  useReveal()

  return (
    <>
      <Navbar />
      <ShowcaseCup />
      <main>
        <Hero />
        <Menu />
        <Why />
        <Finale />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
