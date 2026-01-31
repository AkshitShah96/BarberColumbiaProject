import { Link } from 'react-router-dom'
import bg from '../assets/figma/agendar-bg.png'
import './AgendarCita.css'

export default function AgendarCita() {
  return (
    <div className="vegas-page">
      <div className="vegas-frame">
        <div className="agendar" style={{ backgroundImage: `url(${bg})` }}>
          <div className="agendar__overlay" />

          <div className="agendar__steps">
            <div className="agendar-step">
              <div className="agendar-step__dot agendar-step__dot--active">1</div>
              <div className="agendar-step__label">Servicios</div>
            </div>
            <div className="agendar-step__line" aria-hidden="true" />
            <div className="agendar-step">
              <div className="agendar-step__dot">2</div>
              <div className="agendar-step__label">Fecha{'\n'}y hora</div>
            </div>
            <div className="agendar-step__line" aria-hidden="true" />
            <div className="agendar-step">
              <div className="agendar-step__dot">3</div>
              <div className="agendar-step__label">Confirmación</div>
            </div>
          </div>

          <div className="agendar__panel">
            <div className="agendar__title">Elige tus servicios</div>

            <div className="agendar__cards">
              {[
                { name: 'Clásico', desc: 'El corte de siempre, bien hecho.\nRápido, limpio y efectivo.', dur: 'Duración: 40 min', icon: '✂' },
                { name: 'Vegas Pro', desc: 'El servicio de la casa. Más detalle, más tiempo y mejor experiencia.', dur: 'Duración: 60 min', icon: '⚡' },
                { name: 'Premium', desc: 'Todo el cuidado completo. Tiempo, técnica y atención al máximo nivel.', dur: 'Duración: 90 min', icon: '♦' },
                { name: 'Corte', desc: 'Corte sencillo', dur: 'Duración: 30 min', icon: '✂' },
                { name: 'Barba', desc: 'Perfildo de barba con tónicos', dur: 'Duración: 20 min', icon: '🧔' },
                { name: 'Depilación', desc: 'Depilación de nariz y orejas', dur: 'Duración: 20 min', icon: '✦' },
                { name: 'Limpieza facial', desc: 'Limpieza facial profunda', dur: 'Duración: 25 min', icon: '🧖' },
                { name: 'Cejas', desc: 'Perfilado de cejas', dur: 'Duración: 5 min', icon: '〰' },
              ].map((s) => (
                <div key={s.name} className="agendar-card">
                  <div className="agendar-card__top">
                    <div className="agendar-card__icon" aria-hidden="true">{s.icon}</div>
                    <div className="agendar-card__name">{s.name}</div>
                  </div>
                  <div className="agendar-card__desc">{s.desc}</div>
                  <div className="agendar-card__dur">{s.dur}</div>
                </div>
              ))}
            </div>

            <Link to="/fecha-hora" className="agendar__continue">
              Continuar <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

