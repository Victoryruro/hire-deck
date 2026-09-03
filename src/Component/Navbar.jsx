import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'
import logo from '../assets/Hiredesklogo2.png'
import logoDark from '../assets/Hiredesklogo3.png'
import { useTheme } from '../Component/ThemeCotext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <nav className="w-full fixed paddingLeftRight p-6 top-0 left-0 z-50 bg-primary-400 dark:bg-gray-900 transition-colors duration-300 shadow-md ">
        <div className="max-w-full mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-around items-center h-16">
            
            {/* <!-- Logo --> */}
            <div className="shrink-0 text-primary-50 font-bold text-2xl">
                <Link to="/">
                  <img src={theme === 'dark' ? logoDark : logo} alt="Logo" className="h-20" />
                </Link>
            </div>

            {/* <!-- Desktop Menu --> */}
            <div className="hidden lg:flex space-x-8 font-semibold ml-auto">
              <Link to="/Job" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-base">Jobs</Link>
              <Link to="/Company" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-base">Companies</Link>
              <Link to="/About" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-base">About</Link>
              <Link to="/Pricing" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-base">Pricing</Link>
              <Link to="/Blog" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-base">Blog</Link>
              <Link to="/Contact" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-base">Contact</Link>
            </div>

            {/* <!-- Call to Action + Theme Toggle --> */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full  dark:bg-gray-700 text-gray-500 dark:text-gray-500 hover:opacity-80 transition-all"
              >
                {theme === 'dark' ? <FiSun size={35} /> : <FiMoon size={35} />}
              </button>

              <Link to="/PostAJob" className="px-4 py-2 bg-primary-50 rounded-md text-white font-semibold text-xl hover:bg-primary-50 transition-all">
                Post a Job
              </Link>
            </div>

            {/* <!-- Mobile Menu Button + Theme Toggle --> */}
            <div className="flex lg:hidden  items-center gap-10">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full bg-primary-50/20  dark:bg-gray-700 text-gray-500 dark:text-gray-500"
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <Link to="/PostAJob" className="hidden sm:block px-4 py-2 bg-primary-50 rounded-md text-white font-semibold text-xl hover:bg-primary-50 transition-all">
                Post a Job
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="text-gray-900 dark:text-white! focus:outline-none"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        {isOpen && (
          <div id="mobile-menu" className="  px-4 pb-4 flex flex-col gap-7 lg:hidden bg-primary-400 dark:bg-gray-900! ">
              <Link onClick={() => setIsOpen(false)} to="/Job" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-xl">Job</Link>
              <Link onClick={() => setIsOpen(false)} to="/Company" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-xl">Companies</Link>
              <Link onClick={() => setIsOpen(false)} to="/About" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-xl">About</Link>
              <Link onClick={() => setIsOpen(false)} to="/Pricing" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-xl">Pricing</Link>
              <Link onClick={() => setIsOpen(false)} to="/Contact" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-xl">Contact</Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header