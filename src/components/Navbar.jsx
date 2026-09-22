import { useEffect, useState } from 'react'
import { info } from '../data'
import './Navbar.css'

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Craft', href: '#finale' },
  { label: 'Why Rahma', href: '#why' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock background scroll while the mobile menu is open, so it looks and
  // behaves the same no matter where on the page it was opened
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled && !open ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={(e) => go(e, '#top')}>
          Rahma <span>Roasters</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
          ))}
          <a className="btn btn--solid nav__order" href={info.order} target="_blank" rel="noreferrer">Order Now</a>
        </nav>
        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
