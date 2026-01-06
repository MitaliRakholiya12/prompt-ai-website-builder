import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Prompt-Based AI Website Builder</h1>
        <p className="text-gray-600 mb-6">
          Welcome! This is the starting point of your project. 
          Tailwind CSS is configured and ready to go.
        </p>
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500">
            Check <code className="bg-gray-200 px-1 rounded">README.md</code> for setup instructions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
