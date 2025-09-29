import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='text-white'>
      <nav className="w-full bg-black">
        <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 py-2">

            <div>
              <h2 className="text-2xl font-bold">yukimizu</h2>
            </div>
            

            <div className="flex lg:hidden">
              <button
                type="button"

                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}>
            <div className="flex flex-col lg:flex-row lg:mx-6 text-xl font-bold">
              <Link to="/" className="block px-4 py-2 mt-2 text-xl text-white capitalize lg:mt-0">Home</Link>
              <Link to="/works" className="block px-4 py-2 mt-2 text-xl text-white capitalize lg:mt-0">Works</Link>
              <Link to="/cosplay" className="block px-4 py-2 mt-2 text-xl text-white capitalize lg:mt-0">Cosplay</Link>
              <Link to="/univ" className="block px-4 py-2 mt-2 text-xl text-white capitalize lg:mt-0">Univ. bio</Link>
              <Link to="/blog" className="block px-4 py-2 mt-2 text-xl text-white capitalize lg:mt-0">Blog</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header