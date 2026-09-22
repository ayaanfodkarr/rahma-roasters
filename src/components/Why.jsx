import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { assets, perks } from '../data'
import './Why.css'

gsap.registerPlugin(ScrollTrigger)

export default function Why() {
  const ref = useRef(null)

  // Pin the section and reveal the perks strictly one-by-one (01 → 02 → 03 → 04)
  // as you scroll — the cup holds centred, "indicating" each perk as it appears.
  // On small screens (and reduced motion) we skip the pin and simply show them.
  useEffect(() => {
    const section = ref.current
    const els = Array.from(section.querySelectorAll('.perk'))
      .sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order))
    const noPin =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 900px)').matches
    if (noPin) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const st = ScrollTrigger.create({
      id: 'whyPin',
      trigger: section, start: 'top top', end: '+=110%',
      pin: true, scrub: true, invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress
        // reveal 01 → 02 → 03 → 04, all shown by ~70% (then the cup can descend)
        els.forEach((el, i) => el.classList.toggle('is-in', p >= 0.1 + i * 0.2))
      },
    })
    return () => st.kill()
  }, [])

  // area places each perk in the grid: p1 p2 flank the cup on top, p3 p4 below.
  // On mobile the grid collapses to one column in numeric order (cup first).
  const Perk = ({ p, area }) => (
    <div className={`perk perk--${area}`} data-order={Number(p.n) - 1}>
      <span className="perk__n">{p.n}</span>
      <h3 className="perk__title">{p.title}</h3>
      <p className="perk__body">{p.body}</p>
    </div>
  )

  return (
    <section className="why section" id="why" ref={ref}>
      <div className="section__inner">
        <header className="why__head">
          <p className="eyebrow" data-reveal>Why Rahma</p>
          <h2 className="display why__title" data-reveal data-reveal-delay="0.08">
            Coffee is not just a drink — it's an art.
          </h2>
        </header>

        <div className="why__stage">
          <Perk p={perks[0]} area="p1" />
          <Perk p={perks[1]} area="p2" />

          {/* the cup rests here (static); the travelling cup hands off to it */}
          <div className="why__cup" aria-hidden="true">
            <div className="why__disc" />
            <div id="cup-craft-dock" className="why__dock" />
            <img className="why__cupimg" src={assets.showcaseCup} alt="" />
          </div>

          <Perk p={perks[2]} area="p3" />
          <Perk p={perks[3]} area="p4" />
        </div>
      </div>
    </section>
  )
}
