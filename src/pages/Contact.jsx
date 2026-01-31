import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@thehaircutplace.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Barber Street, City, State 12345</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Hours</h3>
                <p>Mon-Sat: 9AM - 8PM<br />Sunday: 10AM - 6PM</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea
              placeholder="Your Message"
              className="form-textarea"
              rows="6"
            ></textarea>
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
