import { Link } from "react-router-dom"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import "../index.css"

const NavbarComponent = () => {
  return (
    <Navbar
      className="rounded-pill d-flex justify-content-between align-items-center"
      fixed="top"
      style={{
        backgroundColor: "rgba(96, 96, 96, 0.5)",
        backdropFilter: "blur(10px)",
        padding: "10px",
      }}
    >
      <Navbar.Brand className="gradient-text">Healthy</Navbar.Brand>
      <Nav className="mr-auto justify-content-center">
        <Nav.Link href="#" className="links-text">
          Recipe Finder
        </Nav.Link>
        <Nav.Link href="#" className="links-text">
          About Us
        </Nav.Link>
        <Nav.Link href="#" className="links-text">
          Contacts
        </Nav.Link>
      </Nav>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
    </Navbar>
  )
}

export default NavbarComponent
