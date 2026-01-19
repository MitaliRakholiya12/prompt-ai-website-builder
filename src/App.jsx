import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PricingPage from './pages/Pricing'
import Marketplace from './pages/Marketplace'
import IntegrationsPage from './pages/Integrations Page.jsx'
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
