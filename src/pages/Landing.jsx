import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Landing() {
  const [prompt, setPrompt] = useState('')
  const { token } = useAuth()
  const navigate = useNavigate()
  const onSubmit = e => {
    e.preventDefault()
    if (!token) {
      navigate('/login', { state: { from: '/', prompt } })
      return
    }
    alert('Prompt submitted: ' + prompt)
  }
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Create websites from a prompt</h1>
        <p className="mt-3 text-gray-600">Describe your site and get a functional, modern website generated automatically.</p>
        <ul className="mt-4 text-gray-600">
          <li>• Tailwind-based responsive layouts</li>
          <li>• Customizable sections</li>
          <li>• Export and publish</li>
        </ul>
      </div>
      <form onSubmit={onSubmit} className="bg-white rounded-lg shadow p-6">
        <label className="block text-sm font-medium text-gray-700">Your prompt</label>
        <textarea
          className="mt-2 w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          placeholder="Create a modern portfolio website for a photographer with a dark theme and contact form"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white rounded py-2"
        >
          Generate
        </button>
        {!token && <p className="mt-2 text-xs text-gray-500">Login required to generate websites.</p>}
      </form>
    </div>
  )
}

