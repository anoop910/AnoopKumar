import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <nav className="bg-black shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-white font-bold text-xl">ANOOP</h1>
            </div>

            {/* Menu for Desktop */}
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-white  hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300">Home</Link>
              <Link to="/about" className="text-white  hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300">About</Link>
              <Link to="/myskills" className="text-white  hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300">My Skills</Link>
              <Link to="/contact" className="text-white  hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - opens from the left */}
        {isOpen && (
          <div className="md:hidden bg-black fixed top-0 left-0 w-3/4 h-full z-50">
            <div className="px-2 pt-16 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium  hover:text-[#000000] transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300">Home</Link>
              <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium  hover:text-[#000000] transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300">About</Link>
              <Link to="/myskills" className="text-white block px-3 py-2 rounded-md text-base font-medium  hover:text-[#000000] transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300 ">My Skills</Link>
              <Link to="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium  hover:text-[#000000] transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-gray-700 duration-300">Contact</Link>
            </div>
          </div>
        )}
      </nav>

    </div>
  )
}

export default Navebar
