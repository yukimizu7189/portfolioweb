import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="object-contain object-center rounded w-48 h-auto" src="logologo.jpg" alt='yukimizu_logo'></img>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-5xl mb-2 font-bold text-gray-900">yukimizu</h1>
            <p className="mb-8 leading-relaxed">photograph / video / coding (newb) / cosplay</p>
            <div className="flex justify-center">
              <a href="https://x.com/yukimizu7189" target="_blank" className="no-underline m-2 inline-flex text-white bg-blue-500 border-0 py-2 px-6 hover:bg-blue-600 rounded text-lg">Twitter</a>
              <Link to="/works" className="no-underline m-2 inline-flex text-white bg-emerald-400 border-0 py-2 px-6 hover:bg-emerald-600 rounded text-lg">Learn more!</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage