import { Link } from 'react-router-dom'
import bg from '../assets/figma/confirmacion-bg.png'
import './Confirmacion.css'

export default function Confirmacion() {
  return (
    <div className="vegas-page">
      <div className="vegas-frame">
        <div className="confirm" style={{ backgroundImage: `url(${bg})` }}>
          <div className="confirm__overlay" />

          <div className="confirm__cardWrap">
            <div className="confirm__card">
              <div className="confirm__title">¡Tu cita quedó registrada!</div>
              <div className="confirm__lines">
                <div>Servicios: Limpieza facial, cejas</div>
                <div>Fecha: 8 de enero</div>
                <div>Hora: 2:00 p. m.</div>
                <div>Precio: $ 41.000 COP</div>
              </div>

              <div className="confirm__actions">
                <Link to="/" className="confirm__homeBtn">Volver al homre</Link>
                <button type="button" className="confirm__modify">Modificar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

