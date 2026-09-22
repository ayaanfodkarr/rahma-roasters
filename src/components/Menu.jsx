import { menu, info } from '../data'
import './Menu.css'

export default function Menu() {
  return (
    <section className="menu section" id="menu">
      <div className="section__inner">
        <header className="menu__head">
          <p className="eyebrow" data-reveal>Curated Coffee Selection</p>
          <h2 className="display menu__title" data-reveal data-reveal-delay="0.08">Loved by every guest.</h2>
        </header>

        <div className="menu__grid">
          {menu.map((item, i) => (
            <article className={`mcard${item.big ? ' mcard--big' : ''}`} key={item.name} data-reveal data-reveal-delay={0.08 * i}>
              <div className="mcard__rating">{item.rating} ★</div>
              <div className="mcard__media"><img src={item.img} alt={item.name} loading="lazy" /></div>
              <span className="mcard__tag">{item.tag}</span>
              <h3 className="mcard__name">{item.name}</h3>
              <p className="mcard__desc">{item.desc}</p>
              <div className="mcard__foot">
                <span className="mcard__price">{item.price}</span>
                <a className="mcard__add" href={info.order} target="_blank" rel="noreferrer" aria-label={`Order ${item.name}`}>+</a>
              </div>
            </article>
          ))}
        </div>

        <div className="menu__more" data-reveal>
          <a className="btn btn--ghost" href={info.order} target="_blank" rel="noreferrer">Explore our full menu</a>
        </div>
      </div>
    </section>
  )
}
