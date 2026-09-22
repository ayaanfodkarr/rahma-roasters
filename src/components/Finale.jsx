import { assets, info } from '../data'
import './Finale.css'

export default function Finale() {
  return (
    <section className="finale section" id="finale">
      <div className="section__inner finale__grid">
        <div className="finale__text">
          <p className="eyebrow" data-reveal>The perfect pour</p>
          <h2 className="display finale__title" data-reveal data-reveal-delay="0.08">
            A great cup, <em>in the right hands.</em>
          </h2>
          <p className="finale__body" data-reveal data-reveal-delay="0.16">
            From our roaster to your palm — every Rahma cup is crafted to be held,
            savoured, and remembered. This is where it all comes together.
          </p>
          <a className="btn btn--solid finale__cta" href={info.order} target="_blank" rel="noreferrer" data-reveal data-reveal-delay="0.24">
            Order yours
          </a>
        </div>

        {/* the travelling cup floats in and hands off to this static cup,
            which scrolls with the hand (no jitter, no float) */}
        <div className="finale__stage">
          <img className="finale__hand finale__hand--back" src={assets.hand} alt="" aria-hidden="true" />
          <div id="cup-hand-dock" className="finale__dock" aria-hidden="true" />
          <img className="finale__cup" src={assets.showcaseCup} alt="" aria-hidden="true" />
          <img className="finale__hand finale__hand--front" src={assets.hand} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
