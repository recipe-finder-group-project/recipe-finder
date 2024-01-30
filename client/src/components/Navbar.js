import { Link } from 'react-router-dom'
import React from 'react'
const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
            // logo link
            {/*<img src={logo-recipe-finder.png} alt="logo" />*/}
          <h1>The Recipe Finder App</h1>
        </Link>
          <Link to="/contact">
              <p>Contact</p>
          </Link>
      </div>
    </header>
  )
}

export default Navbar