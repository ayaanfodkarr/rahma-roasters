import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Lenis smooth scroll wired to ScrollTrigger. Native scroll on mobile
 *  (touch) and reduced motion; refreshes promptly on resize. */
export default function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (reduce || isMobile) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const settle = setTimeout(() => ScrollTrigger.refresh(), 600)
    let rt
    const onResize = () => {
      clearTimeout(rt)
      rt = setTimeout(() => { lenis.resize(); ScrollTrigger.refresh() }, 120)
    }
    window.addEventListener('resize', onResize)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      window.removeEventListener('resize', onResize)
      clearTimeout(settle)
      clearTimeout(rt)
    }
  }, [])
}
