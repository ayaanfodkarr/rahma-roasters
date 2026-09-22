import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { assets } from '../data'
import './ShowcaseCup.css'

gsap.registerPlugin(ScrollTrigger)

/**
 * The cup rests centred in the Why section (as a static image) while the perks
 * reveal one-by-one. Once the pinned Why releases and the Finale rises into view,
 * this fixed cup takes over and travels down into the hand, then hands off to the
 * static cup that lives in the hand (which scrolls with the section — no jitter).
 * Exactly one cup is visible at every moment, so there is never a double/ghost cup.
 */
export default function ShowcaseCup() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    // On small screens (and reduced motion) the cup rests statically in each
    // section — the Why centre and the hand — so touch scrolling stays smooth.
    const noTravel =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 900px)').matches
    if (noTravel) {
      gsap.set(el, { opacity: 0 })
      return
    }
    const base = () => el.getBoundingClientRect().width || 360
    const dock = (id) => {
      const d = document.getElementById(id)
      if (!d) return null
      const r = d.getBoundingClientRect()
      return { x: r.left + r.width / 2, y: r.top + r.height / 2, s: r.width / base() }
    }
    const smooth = (t) => t * t * (3 - 2 * t)
    const whyCup = document.querySelector('.why__cupimg')
    const finCup = document.querySelector('.finale__cup')

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 })

    let start = null // craft-dock position, captured when the descent begins

    // the scroll position where the pinned Why section finishes (all four perks
    // shown). The descent begins EXACTLY here, so the cup never leaves early.
    const whyEnd = () => {
      const pin = ScrollTrigger.getById('whyPin')
      if (pin) return pin.end
      const f = document.querySelector('.finale')
      return f ? f.getBoundingClientRect().top + window.scrollY - window.innerHeight : 0
    }

    const st = ScrollTrigger.create({
      // a long, gentle descent that starts the instant the pin releases and
      // spans a bit more than one screen, landing the cup in the centred hand
      start: whyEnd,
      end: () => whyEnd() + window.innerHeight * 1.15,
      scrub: 0.5, invalidateOnRefresh: true,
      onRefresh: () => { start = null },
      onUpdate: (self) => {
        const p = self.progress
        if (p <= 0) {
          // resting: the static Why cup indicates the perks; travelling cup hidden
          gsap.set(el, { opacity: 0 })
          if (whyCup) whyCup.style.opacity = '1'
          if (finCup) finCup.style.opacity = '0'
          start = null
          return
        }
        const h = dock('cup-hand-dock')
        if (!h) return
        if (!start) start = dock('cup-craft-dock') || h
        const t = smooth(p)
        gsap.set(el, {
          x: start.x + (h.x - start.x) * t,
          y: start.y + (h.y - start.y) * t,
          scale: start.s + (h.s - start.s) * t,
          opacity: t < 0.98 ? 1 : 0,
        })
        if (whyCup) whyCup.style.opacity = '0'
        if (finCup) finCup.style.opacity = t >= 0.98 ? '1' : '0'
      },
    })

    return () => st.kill()
  }, [])

  return (
    <div className="showcup" ref={wrapRef} aria-hidden="true">
      <img src={assets.showcaseCup} alt="" className="showcup__img" />
    </div>
  )
}
