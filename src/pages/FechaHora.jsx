import { Link } from 'react-router-dom'
import './AgendarCita.css'
import './FechaHora.css'

export default function FechaHora() {
  return (
    <div className="vegas-page">
      <div className="vegas-frame">
        <div className="fechaHora">
          <div className="fechaHora__steps">
            <div className="agendar-step">
              <div className="agendar-step__dot agendar-step__dot--active">1</div>
              <div className="agendar-step__label">Servicios</div>
            </div>
            <div className="agendar-step__line" aria-hidden="true" />
            <div className="agendar-step">
              <div className="agendar-step__dot agendar-step__dot--active">2</div>
              <div className="agendar-step__label">Fecha{'\n'}y hora</div>
            </div>
            <div className="agendar-step__line" aria-hidden="true" />
            <div className="agendar-step">
              <div className="agendar-step__dot">3</div>
              <div className="agendar-step__label">Confirmación</div>
            </div>
          </div>

          <div className="fechaHora__panel">
            <div className="fechaHora__content">
              <div className="fechaHora__calendar">
                <div className="fechaHora__calendarBox">
                  <div className="fechaHora__calendarHeader">
                    <button className="fechaHora__arrow" type="button" aria-label="Mes anterior">‹</button>
                    <div className="fechaHora__month">Enero</div>
                    <button className="fechaHora__arrow" type="button" aria-label="Mes siguiente">›</button>
                  </div>
                  <div className="fechaHora__grid">
                    {'D L M M J V S'.split(' ').map((d) => (
                      <div key={d} className="fechaHora__dow">{d}</div>
                    ))}
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div key={i} className={`fechaHora__day${i === 7 ? ' fechaHora__day--selected' : ''}`}>
                        {i < 3 ? '' : i - 2}
                      </div>
                    ))}
                  </div>
                  <div className="fechaHora__calendarCtas">
                    <button type="button" className="fechaHora__cancel">Cancelar</button>
                    <Link to="/confirmacion" className="fechaHora__confirm">
                      Confirmar
                    </Link>
                  </div>
                </div>

                <div className="fechaHora__legend">
                  <div className="fechaHora__legendItem">
                    <span className="fechaHora__dot fechaHora__dot--ok" aria-hidden="true" />
                    <span>Disponibles</span>
                  </div>
                  <div className="fechaHora__legendItem">
                    <span className="fechaHora__dot fechaHora__dot--no" aria-hidden="true" />
                    <span>No disponibles</span>
                  </div>
                </div>
              </div>

              <div className="fechaHora__times">
                <div className="fechaHora__section">
                  <div className="fechaHora__sectionTitle">Horario disponible</div>
                  <div className="fechaHora__timeRow">
                    {['12:30', '2:00', '3:00'].map((t) => (
                      <div key={`am-${t}`} className="fechaHora__time fechaHora__time--ok">{t}</div>
                    ))}
                  </div>
                  <div className="fechaHora__timeRow">
                    {['12:30', '2:00', '3:00'].map((t) => (
                      <div key={`pm-${t}`} className="fechaHora__time fechaHora__time--ok">{t}</div>
                    ))}
                  </div>
                </div>

                <div className="fechaHora__section">
                  <div className="fechaHora__sectionTitle">No disponible</div>
                  <div className="fechaHora__timeRow">
                    {['10', '11', '11:30'].map((t) => (
                      <div key={`na-${t}`} className="fechaHora__time fechaHora__time--no">{t}</div>
                    ))}
                  </div>
                  <div className="fechaHora__timeRow">
                    {['12:30', '2:00', '3:00'].map((t) => (
                      <div key={`np-${t}`} className="fechaHora__time fechaHora__time--no">{t}</div>
                    ))}
                  </div>
                </div>

                <Link to="/confirmacion" className="fechaHora__continue">
                  Continuar <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

