import { assets, info } from '../data'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__spoon" src={assets.beanSpoon} alt="" aria-hidden="true" />
      <div className="footer__inner">
        <a href="#top" className="footer__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          Rahma <span>Roasters</span>
        </a>
        <p className="footer__tag">{info.tagline}</p>
        <nav className="footer__links">
          <a href={info.order} target="_blank" rel="noreferrer">Order</a>
          <a href={info.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href="#menu" onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }}>Menu</a>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} {info.name} · Lake Forest, CA</p>
      </div>
    </footer>
  )
}
