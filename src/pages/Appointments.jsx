import { useState } from 'react'
import './Appointments.css'

const Appointments = () => {
  const [selectedService, setSelectedService] = useState('')
  const [selectedBarber, setSelectedBarber] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const services = [
    { id: 1, name: 'Classic Haircut', price: '$25', duration: '30 min' },
    { id: 2, name: 'Beard Trim', price: '$20', duration: '20 min' },
    { id: 3, name: 'Haircut & Beard', price: '$40', duration: '45 min' },
    { id: 4, name: 'Hair Styling', price: '$30', duration: '35 min' },
  ]

  const barbers = [
    { id: 1, name: 'John Smith', rating: 4.9, image: '👨' },
    { id: 2, name: 'Mike Johnson', rating: 4.8, image: '👨‍🦱' },
    { id: 3, name: 'David Williams', rating: 4.9, image: '👨‍🦰' },
    { id: 4, name: 'Chris Brown', rating: 4.7, image: '👨‍🦳' },
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment booked successfully!')
  }

  return (
    <div className="appointments">
      <div className="container">
        <h1 className="page-title">Book an Appointment</h1>
        <p className="page-subtitle">
          Select your service, barber, date, and time
        </p>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="form-section-title">Select Service</h2>
            <div className="services-grid">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`service-option ${selectedService === service.id ? 'selected' : ''}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <h3>{service.name}</h3>
                  <div className="service-meta">
                    <span className="service-price">{service.price}</span>
                    <span className="service-duration">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Choose Your Barber</h2>
            <div className="barbers-grid">
              {barbers.map((barber) => (
                <div
                  key={barber.id}
                  className={`barber-card ${selectedBarber === barber.id ? 'selected' : ''}`}
                  onClick={() => setSelectedBarber(barber.id)}
                >
                  <div className="barber-avatar">{barber.image}</div>
                  <h3>{barber.name}</h3>
                  <div className="barber-rating">
                    <span>⭐</span>
                    <span>{barber.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Select Date & Time</h2>
            <div className="datetime-selectors">
              <div className="date-selector">
                <label>Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="time-selector">
                <label>Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  )
}

export default Appointments
