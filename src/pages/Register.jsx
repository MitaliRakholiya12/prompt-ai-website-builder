import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { register as apiRegister } from '../services/api'

export default function Register() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const submit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await apiRegister(email, password)
      navigate('/login')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Register</h2>
      <form onSubmit={submit} className="mt-4 space-y-3">
        <input className="w-full border rounded p-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full border rounded p-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="w-full bg-blue-600 text-white rounded py-2" disabled={loading}>{loading ? 'Loading...' : 'Create account'}</button>
      </form>
      <p className="mt-3 text-sm text-gray-600">Already registered? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  )
}
