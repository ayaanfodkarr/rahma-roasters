import { info } from '../data'
import './Visit.css'

const directions = 'https://maps.google.com/?q=' + encodeURIComponent(info.name + ' ' + info.address)

export default function Visit() {
  return (
    <section className="visit section" id="visit">
      <div className="section__inner visit__grid">
        <div className="visit__text">
          <p className="eyebrow" data-reveal>Come say hi</p>
          <h2 className="display visit__title" data-reveal data-reveal-delay="0.08">Find us in Lake&nbsp;Forest.</h2>
          <ul className="visit__list">
            <li data-reveal data-reveal-delay="0.14"><span className="visit__lab">Where</span><span className="visit__val">{info.address}</span></li>
            <li data-reveal data-reveal-delay="0.2"><span className="visit__lab">When</span><span className="visit__val">{info.hours}</span></li>
            <li data-reveal data-reveal-delay="0.26"><span className="visit__lab">Say hello</span><a className="visit__val visit__link" href={info.instagram} target="_blank" rel="noreferrer">{info.instagramHandle}</a></li>
          </ul>
          <div className="visit__cta" data-reveal data-reveal-delay="0.32">
            <a className="btn btn--solid" href={info.order} target="_blank" rel="noreferrer">Order online</a>
            <a className="btn btn--ghost" href={directions} target="_blank" rel="noreferrer">Get directions</a>
          </div>
        </div>
        <a className="visit__map" href={directions} target="_blank" rel="noreferrer" data-reveal data-reveal-delay="0.1" aria-label="Open in Google Maps">
          <div className="visit__pin"><span /></div>
          <span className="visit__maptext">Towne Centre Dr.</span>
        </a>
      </div>
    </section>
  )
}
