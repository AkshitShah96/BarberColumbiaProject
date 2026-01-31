import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">About Us</h1>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Welcome to The Haircut Place, your premier destination for professional barber services.
            </p>
            <p className="about-paragraph">
              We are committed to providing exceptional grooming experiences with skilled barbers who
              understand the art of men's styling. Our mission is to help you look and feel your best
              with every visit.
            </p>
            <p className="about-paragraph">
              With years of experience and a passion for excellence, we ensure that every haircut,
              trim, and styling service meets the highest standards. Your satisfaction and confidence
              are our top priorities.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Expert Barbers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20K+</div>
              <div className="stat-label">Appointments Booked</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
