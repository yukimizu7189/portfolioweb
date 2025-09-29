import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
       <nav className="w-full bg-red-200">
        <div className="flex justify-between bg-blue-200 max-w-5xl mx-auto">
          <div className="bg-yellow-200">Logo</div>
          <div className="bg-indigo-200">Menu</div>
        </div>
      </nav>
      {/* <div className='logo'>
        <h3>yukimizu</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/cosplay">Cosplay</Link>
          </li>
          <li>
            <Link to="/univ">Univ. bio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header