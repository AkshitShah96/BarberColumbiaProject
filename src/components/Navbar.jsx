import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="vegas-navbar">
      <div className="vegas-navbar__inner vegas-frame">
        <Link to="/" className="vegas-navbar__logo" aria-label="Vegas Estudio - Inicio">
          <span className="vegas-navbar__logoText">VEGAS</span>
        </Link>

        <div className="vegas-navbar__links" aria-label="Navegación principal">
          <Link to="/" className="vegas-navbar__link">Home</Link>
          <Link to="/services" className="vegas-navbar__link">Servicios</Link>
          <Link to="/ubicacion" className="vegas-navbar__link">Ubicación</Link>
        </div>

        <div className="vegas-navbar__actions">
          <div className="vegas-navbar__cart" aria-label="Carrito">
            <span className="vegas-navbar__cartIcon" aria-hidden="true">🛒</span>
            <span className="vegas-navbar__cartBadge" aria-label="Items en carrito">0</span>
          </div>
          <Link to="/login" className="vegas-navbar__button vegas-navbar__button--ghost">
            Iniciar sesión
          </Link>
          <Link to="/agendar" className="vegas-navbar__button vegas-navbar__button--primary">
            <span className="vegas-navbar__buttonIcon" aria-hidden="true">＋</span>
            Agendar cita
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
