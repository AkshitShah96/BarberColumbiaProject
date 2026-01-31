import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Register from './pages/Register'
import Login from './pages/Login'
import AgendarCita from './pages/AgendarCita'
import Ubicacion from './pages/Ubicacion'
import FechaHora from './pages/FechaHora'
import Confirmacion from './pages/Confirmacion'
import './App.css'

function AppLayout() {
  const location = useLocation()
  const hideFooter = location.pathname === '/confirmacion'

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/agendar" element={<AgendarCita />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/fecha-hora" element={<FechaHora />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
