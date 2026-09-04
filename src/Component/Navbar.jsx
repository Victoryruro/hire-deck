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
      <nav className="w-full fixed paddingLeftRight p-6 top-0 left-0 z-50 bg-primary-400 via-transparent dark:bg-gray-900 transition-colors duration-300 shadow-md ">
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
              <Link to="/Job" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-lg">Jobs</Link>
              <Link to="/Company" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-lg">Companies</Link>
              <Link to="/About" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-lg">About</Link>
              <Link to="/Pricing" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-lg">Pricing</Link>
              <Link to="/Blog" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-lg">Blog</Link>
              <Link to="/Contact" className="text-gray-500 dark:text-gray-300  hover:text-black dark:hover:text-white! transition text-lg">Contact</Link>
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

              <Link to="/Company" className="px-4 py-2 bg-primary-50 rounded-md text-white font-semibold text-xl hover:bg-primary-50 transition-all">
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
          <div id="mobile-menu" className="  px-4 pb-4 w-full flex flex-col justify-start items-start p-10 gap-7 lg:hidden bg-primary-400 dark:bg-gray-900! border-t border-gray-200 dark:border-gray-700! transition-all duration-300">
              <Link onClick={() => setIsOpen(false)} to="/Job" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-2xl">Job</Link>
              <Link onClick={() => setIsOpen(false)} to="/Company" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-2xl">Companies</Link>
              <Link onClick={() => setIsOpen(false)} to="/About" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-2xl">About</Link>
              <Link onClick={() => setIsOpen(false)} to="/Pricing" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-2xl">Pricing</Link>
              <Link onClick={() => setIsOpen(false)} to="/Contact" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-2xl">Contact</Link>
              <Link onClick={() => setIsOpen(false)} to="/Blog" className="text-gray-900 dark:text-gray-100! hover:text-gray-700 dark:hover:text-white transition text-2xl">Blog</Link>
              <Link to="/PostAJob" className="block w-full text-2xl justify-self-stretch sm:hidden px-4 py-2 bg-primary-50 rounded-md text-white font-semibold  hover:bg-primary-50 transition-all">
                Post a Job
              </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header