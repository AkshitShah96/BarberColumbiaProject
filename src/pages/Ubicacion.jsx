import { Link } from 'react-router-dom'
import ubicacionBg from '../assets/figma/ubicacion-bg-2b8b27.png'
import ubicacionPhoto from '../assets/figma/ubicacion-photo.png'
import ubicacionMap from '../assets/figma/ubicacion-map.png'
import './Ubicacion.css'

export default function Ubicacion() {
  return (
    <div className="vegas-page">
      <div className="vegas-frame">
        <section className="ubicacion-page" style={{ backgroundImage: `url(${ubicacionBg})` }}>
          <div className="ubicacion-page__overlay" />
          <div className="ubicacion-page__content">
            <div className="ubicacion-page__row">
              <img className="ubicacion-page__photo" src={ubicacionPhoto} alt="" />

              <div className="ubicacion-page__right">
                <div className="ubicacion-page__h2">Caé al estudio cuando{'\n'}lo necesites.</div>
                <div className="ubicacion-page__body">¡Aquí te esperamos!</div>
                <div className="ubicacion-page__address">Calle 76 #63-58</div>

                <div className="ubicacion-page__mapCta">
                  <img className="ubicacion-page__map" src={ubicacionMap} alt="" />
                  <Link to="/agendar" className="ubicacion-page__btn">
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

