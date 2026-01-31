import { Link } from 'react-router-dom'
import './Auth.css'

const Register = () => {
  return (
    <div className="auth">
      <div className="auth-container">
        <h1 className="auth-title">Create Account</h1>
        <p style={{ textAlign: 'center', color: 'var(--light-gray)', marginBottom: '1.5rem' }}>
          Join The Haircut Place
        </p>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" className="auth-input" />
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <input type="password" placeholder="Confirm Password" className="auth-input" />
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
