import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { parseJwt } from '../../utils/jwt'

export default function Layout({ children }) {
  const { token, logout } = useAuth()
  const payload = token ? parseJwt(token) : null
  const email = payload?.email
  const initials = email ? email[0]?.toUpperCase() : 'U'
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="text-blue-600 font-semibold">AI Website Builder</Link>
          <nav className="flex items-center gap-3">
            <Link to="/" className="text-gray-600">Home</Link>
            {!token && <Link to="/login" className="text-gray-600">Login</Link>}
            {!token && <Link to="/register" className="text-gray-600">Register</Link>}
            {token && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">{initials}</div>
                <span className="text-gray-700 text-sm">{email}</span>
                <button className="text-gray-600" onClick={logout}>Logout</button>
              </div>
            )}
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
