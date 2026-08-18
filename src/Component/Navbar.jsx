import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Hiredesklogo.png'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="w-full fixed p-6 top-0 left-0 z-50 bg-primary-400 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* <!-- Logo --> */}
            <div className="shrink-0 text-primary-50 font-bold text-2xl ">
                <Link to="/">
                  <img src={logo} alt="Logo" className="h-20 " />
                </Link>
            </div>

            {/* <!-- Desktop Menu --> */}
            <div className="hidden md:flex space-x-8 font-semibold">
              
              <Link to="/#hero" className="text-gray-500 hover:text-black transition text-xl">Jobs</Link>
             
              <Link to="/About#shop" className="text-gray-500 hover:text-black transition text-xl">Companies</Link>

              <Link to="/About#about" className="text-gray-500 hover:text-black transition text-xl">About</Link>
              <Link to="/Pricing" className="text-gray-500 hover:text-black transition text-xl">
                Pricing
              </Link>
              <Link to="/Blog" className="text-gray-500 hover:text-black transition text-xl">Blog</Link>
              <Link to="/Contact" className="text-gray-500 hover:text-black transition text-xl">Contact</Link>
            </div>

            {/* <!-- Call to Action --> */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/PostAJob" className="px-4 py-2 bg-primary-50 rounded-md text-white font-semibold text-xl hover:bg-primary-50 transition-all">
                Post a Job
              </Link>
            </div>

            {/* <!-- Mobile Menu Button --> */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden px-4 pb-4 flex flex-col gap-7 bg-primary-400">
              <Link  onClick={() => setIsOpen(false)} to="/#hero" className="text-gray-900 hover:text-gray-700 transition text-xl">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/About#shop" className="text-gray-900 hover:text-gray-700 transition text-xl">Shop</Link>
              <Link onClick={() => setIsOpen(false)} to="/About#about" className="text-gray-900 hover:text-gray-700 transition text-xl">About</Link>
              <Link onClick={() => setIsOpen(false)} to="/Menu" className="text-gray-900 hover:text-gray-700 transition text-xl">Menu</Link>
            <Link onClick={() => setIsOpen(false)} to="/About#contact" className="block mt-2 px-4 py-2 bg-primary-50 text-gray-900 rounded-md text-xl text-center hover:bg-primary-50 transition-all w-1/2 mx-auto font-semibold">Contact Us</Link>
          </div>
        )}
      </nav>



    
    </>
  )
}

export default Header