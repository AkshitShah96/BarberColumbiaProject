import { Link } from 'react-router-dom'
import heroBg from '../assets/figma/home-hero-bg-79cc0e.png'
import ubicacionBg from '../assets/figma/ubicacion-bg-2b8b27.png'
import ubicacionPhoto from '../assets/figma/ubicacion-photo.png'
import ubicacionMap from '../assets/figma/ubicacion-map.png'
import './Home.css'

export default function Home() {
  return (
    <div className="vegas-page">
      <div className="vegas-frame">
        <section className="home-hero" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="home-hero__overlay" />
          <div className="home-hero__content">
            <h1 className="home-hero__title">El lugar exclusivo{'\n'}para ti.</h1>
            <div className="home-hero__subtitle">Corte y barba con atención personalizada.</div>
            <div className="home-hero__buttons">
              <Link to="/agendar" className="home-hero__btn home-hero__btn--primary">
                Agendar cita
              </Link>
              <Link to="/services" className="home-hero__btn home-hero__btn--secondary">
                Servicios
              </Link>
            </div>
          </div>
        </section>

        <section className="home-services">
          <div className="home-services__inner">
            <div className="home-services__text">
              <div className="home-services__h2">Nuestros servicios</div>
              <div className="home-services__body">
                Servicios pensados para distintas necesidades.
                <br />
                Elige el que mejor vaya contigo y agenda tu espacio.
              </div>
            </div>

            <div className="home-services__cards">
              <div className="home-card home-card--default">
                <div className="home-card__titleRow">
                  <div className="home-card__icon" aria-hidden="true">✂</div>
                  <div className="home-card__title">Clásico</div>
                  <div className="home-card__chip">Duración: 40 min</div>
                </div>
                <div className="home-card__desc">
                  Lavado completo
                  <br />
                  Corte de cabello
                  <br />
                  Arreglo de barba (si aplica)
                  <br />
                  Mascarilla negra
                  <br />
                  Exfoliación express con vapor ozono
                </div>
              </div>

              <div className="home-card home-card--stroke">
                <div className="home-card__titleRow">
                  <div className="home-card__icon" aria-hidden="true">⚡</div>
                  <div className="home-card__title">Vegas Pro</div>
                  <div className="home-card__chip">Duración: 60 min</div>
                </div>
                <div className="home-card__desc">
                  Lavado completo
                  <br />
                  Corte de cabello
                  <br />
                  Perfilado de barba con tónicos
                  <br />
                  Toalla caliente
                  <br />
                  Limpieza facial Pro
                  <br />
                  (vaporización, exfoliación, mascarilla y crema hidratante)
                </div>
              </div>

              <div className="home-card home-card--default">
                <div className="home-card__titleRow">
                  <div className="home-card__icon" aria-hidden="true">♦</div>
                  <div className="home-card__title">Premium</div>
                  <div className="home-card__chip">Duración: 90 min</div>
                </div>
                <div className="home-card__desc">
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
                  (vaporización, exfoliación, mascarilla, extracción de puntos negros,
                  tratamiento con lámpara UV y crema hidratante)
                </div>
              </div>
            </div>

            <Link className="home-services__moreBtn" to="/services">
              Ver más servicios <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="home-ubicacion" style={{ backgroundImage: `url(${ubicacionBg})` }}>
          <div className="home-ubicacion__overlay" />
          <div className="home-ubicacion__content">
            <div className="home-ubicacion__row">
              <img className="home-ubicacion__photo" src={ubicacionPhoto} alt="" />

              <div className="home-ubicacion__right">
                <div className="home-ubicacion__text">
                  <div className="home-ubicacion__h2">Caé al estudio cuando{'\n'}lo necesites.</div>
                  <div className="home-ubicacion__body">¡Aquí te esperamos!</div>
                  <div className="home-ubicacion__address">Calle 76 #63-58</div>
                </div>

                <div className="home-ubicacion__mapCta">
                  <img className="home-ubicacion__map" src={ubicacionMap} alt="" />
                  <Link to="/agendar" className="home-ubicacion__btn">
                    Agendar cita
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
