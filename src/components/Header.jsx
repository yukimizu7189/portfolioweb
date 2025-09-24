import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <div className='logo'>
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
      </nav>
    </header>
  )
}

export default Header