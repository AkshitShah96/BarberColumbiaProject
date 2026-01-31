import { Link } from 'react-router-dom'
import footerBg from '../assets/figma/footer-bg.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="vegas-footer" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="vegas-footer__inner vegas-frame">
        <div className="vegas-footer__top">
          <div className="vegas-footer__brand">
            <div className="vegas-footer__brandMark" aria-hidden="true">VEGAS</div>
          </div>

          <nav className="vegas-footer__links" aria-label="Enlaces">
            <Link to="/" className="vegas-footer__link">Inicio</Link>
            <Link to="/ubicacion" className="vegas-footer__link">Ubicación</Link>
            <Link to="/services" className="vegas-footer__link">Servicios</Link>
            <Link to="/agendar" className="vegas-footer__link">Agendar cita</Link>
          </nav>

          <div className="vegas-footer__info">
            <div className="vegas-footer__infoBlock">
              <div className="vegas-footer__infoTitle">Ubicación</div>
              <div className="vegas-footer__infoText">Calle 76 #63-58</div>
            </div>
            <div className="vegas-footer__infoBlock">
              <div className="vegas-footer__infoText">Horario de atención:</div>
              <div className="vegas-footer__infoText">9:30 a. m. - 8:00 p. m.</div>
            </div>
            <div className="vegas-footer__infoBlock vegas-footer__whatsapp">
              <span aria-hidden="true">WhatsApp</span>
              <span className="vegas-footer__infoText">314 780 1264</span>
            </div>
          </div>
        </div>

        <div className="vegas-footer__divider" aria-hidden="true" />

        <div className="vegas-footer__bottom">
          © 2026 Vegas Estudio
          <br />
          Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}

