import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/broader ai.png";

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="w-full px-5 py-5 flex items-center justify-between">
       <div className="flex items-center gap-5">
  <img
    src={logo}
    alt="BROADERAI Logo"
    className="h-10 md:h-11 w-auto"
  />
</div>


        

       <div className="flex items-center gap-4">
  {/* Login */}
  <Link
    to="/login"
    className="bg-gray-100 text-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-200 font-medium text-lg transition-colors"
  >
    Login
  </Link>

  {/* Start Building */}
  <button
    onClick={() => navigate('/register')}
    className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 font-medium text-lg flex items-center gap-2 transition-colors"
  >
    Start building with AI
  </button>
</div>

      </div>
    </header>
  )
}

export default Navbar
