import { Link } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  return (
    <div className="auth">
      <div className="auth-container">
        <h1 className="auth-title">Login</h1>
        <p style={{ textAlign: 'center', color: 'var(--light-gray)', marginBottom: '1.5rem' }}>
          Welcome back to The Haircut Place
        </p>
        <form className="auth-form">
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
