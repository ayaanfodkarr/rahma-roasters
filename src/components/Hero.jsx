import { useEffect, useRef } from 'react'
import { assets, info } from '../data'
import './Hero.css'

export default function Hero() {
  const scrollRef = useRef(null)
  const toMenu = (e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => { el.style.opacity = Math.max(0, 1 - window.scrollY / 160) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="hero">
      <span className="hero__anchor" id="top" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__text">
          <p className="eyebrow" data-reveal>● Artisan Coffee · {info.est}</p>
          <h1 className="display hero__title" data-reveal data-reveal-delay="0.08">
            Discover the <em>Superior</em> Taste in Every Sip
          </h1>
          <p className="hero__sub" data-reveal data-reveal-delay="0.18">
            For us, coffee isn't just a drink — it's an art. {info.tagline} Sourced
            with intention, roasted in small batches, poured with care.
          </p>
          <div className="hero__cta" data-reveal data-reveal-delay="0.28">
            <a className="btn btn--solid" href={info.order} target="_blank" rel="noreferrer">Order Now</a>
            <a className="btn btn--ghost" href="#menu" onClick={toMenu}>Explore the Menu</a>
          </div>
        </div>

        <div className="hero__art" data-reveal data-reveal-delay="0.15">
          <img className="hero__splash" src={assets.heroSplash} alt="Rahma Roasters signature drinks" />
        </div>
      </div>

      <div className="hero__scroll" ref={scrollRef} aria-hidden="true"><span>Scroll</span><i /></div>
    </section>
  )
}
