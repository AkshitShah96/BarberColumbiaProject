import { Link } from 'react-router-dom'
import heroBg from '../assets/figma/services-hero-bg-a9d8b3.png'
import clasicoImg from '../assets/figma/services-clasico-6be7b8.png'
import vegasProImg from '../assets/figma/services-vegas-pro-5b7cfc.png'
import premiumImg from '../assets/figma/services-premium.png'
import './Services.css'

export default function Services() {
  return (
    <div className="vegas-page">
      <div className="vegas-frame">
        <section className="services-hero" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="services-hero__overlay" />
          <div className="services-hero__content">
            <h1 className="services-hero__title">Nuestros servicios</h1>
          </div>
        </section>

        <section className="services-premium">
          <div className="services-premium__row">
            <img className="services-premium__img" src={clasicoImg} alt="" />
            <div className="services-premium__text">
              <div className="services-premium__titleRow">
                <div className="services-premium__icon" aria-hidden="true">✂</div>
                <div className="services-premium__title">Clásico</div>
                <div className="services-premium__price">$ 25.000</div>
              </div>
              <div className="services-premium__lead">
                El corte de siempre, bien hecho.
                <br />
                Rápido, limpio y efectivo.
              </div>
              <div className="services-premium__desc">
                Lavado completo
                <br />
                Corte de cabello
                <br />
                Arreglo de barba (si aplica)
                <br />
                Mascarilla
                <br />
                Exfoliación express con vapor ozono
              </div>
              <div className="services-premium__meta">Duración: 40 min</div>
            </div>
          </div>

          <div className="services-premium__row services-premium__row--reverse">
            <img className="services-premium__img" src={vegasProImg} alt="" />
            <div className="services-premium__text">
              <div className="services-premium__titleRow">
                <div className="services-premium__icon" aria-hidden="true">⚡</div>
                <div className="services-premium__title">Vegas Pro</div>
                <div className="services-premium__price">$ 41.000</div>
              </div>
              <div className="services-premium__lead">
                El servicio de la casa.
                <br />
                Más detalle, más tiempo y mejor experiencia.
              </div>
              <div className="services-premium__desc">
                Lavado completo
                <br />
                Corte de cabello
                <br />
                Perfilado de barba con tónicos
                <br />
                Toalla caliente
                <br />
                Limpieza facial Pro (vaporización, exfoliación, mascarilla y crema hidratante)
              </div>
              <div className="services-premium__meta">Duración: 60 min</div>
            </div>
          </div>

          <div className="services-premium__row">
            <img className="services-premium__img" src={premiumImg} alt="" />
            <div className="services-premium__text">
              <div className="services-premium__titleRow">
                <div className="services-premium__icon" aria-hidden="true">♦</div>
                <div className="services-premium__title">Premium</div>
                <div className="services-premium__price">$ 60.000</div>
              </div>
              <div className="services-premium__lead">
                Todo el cuidado completo.
                <br />
                Tiempo, técnica y atención al máximo nivel.
              </div>
              <div className="services-premium__desc">
                Lavado completo
                <br />
                Corte de cabello
                <br />
                Perfilado de barba con tónicos
                <br />
                Toalla caliente
                <br />
                Limpieza facial Premium
                <br />
                (vaporización, exfoliación, mascarilla, extracción de puntos negros, tratamiento con lámpara UV y crema hidratante)
              </div>
              <div className="services-premium__meta">Duración: 90 min</div>
            </div>
          </div>
        </section>

        <section className="services-individuales">
          <div className="services-individuales__title">Servicios individuales</div>
          <div className="services-individuales__grid">
            {[
              { name: 'Corte', price: '$ 25.000', desc: 'Corte sencillo', dur: 'Duración: 30 min', icon: '✂' },
              { name: 'Barba', price: '$ 15.000', desc: 'Perfildo de barba con tónicos', dur: 'Duración: 20 min', icon: '🧔' },
              { name: 'Depilación', price: '$ 20.000', desc: 'Depilación de nariz y orejas', dur: 'Duración: 20 min', icon: '✦' },
              { name: 'Limpieza facial', price: '$ 35.000', desc: 'Limpieza facial profunda', dur: 'Duración: 25 min', icon: '🧖' },
              { name: 'Cejas', price: '$ 6.000', desc: 'Perfilado de cejas', dur: 'Duración: 5 min', icon: '〰' },
            ].map((s) => (
              <div key={s.name} className="services-item">
                <div className="services-item__top">
                  <div className="services-item__left">
                    <div className="services-item__icon" aria-hidden="true">{s.icon}</div>
                    <div className="services-item__name">{s.name}</div>
                  </div>
                  <div className="services-item__price">{s.price}</div>
                </div>
                <div className="services-item__desc">{s.desc}</div>
                <div className="services-item__dur">{s.dur}</div>
              </div>
            ))}
          </div>

          <Link to="/agendar" className="services-individuales__continue">
            Continuar <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  )
}
