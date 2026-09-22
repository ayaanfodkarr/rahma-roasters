import { useEffect } from 'react'

/** Reveals [data-reveal] elements as they enter view. Above-the-fold
 *  elements reveal immediately; honours reduced motion. */
export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!els.length) return

    const show = (el) => {
      if (el.dataset.revealDelay) el.style.transitionDelay = `${el.dataset.revealDelay}s`
      el.classList.add('is-in')
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return
        show(e.target)
        io.unobserve(e.target)
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    let r1, r2
    r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        const fold = window.innerHeight * 0.92
        els.forEach((el) => (el.getBoundingClientRect().top < fold ? show(el) : io.observe(el)))
      })
    })
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); io.disconnect() }
  }, [])
}
