import { Link } from "react-router-dom"
import React from "react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>The Recipe Finder App ©</h1>
        </Link>
        <LoginButton />
        <LogoutButton />
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
