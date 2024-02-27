// import { Link } from "react-router-dom"
import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Navbar, Nav } from "react-bootstrap"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import "../index.css"

const NavbarComponent = () => {
  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    // Call the function to send data to the backend when the component mounts
    if (isAuthenticated) {
      sendDataToBackend(user)
    }
  }, [isAuthenticated, user])

  const sendDataToBackend = async (userData) => {
    try {
      const response = await fetch(
        "https://recipe-finder-server-xgd5.onrender.com/save-user-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers you may need, such as authorization tokens
          },
          body: JSON.stringify({
            name: userData.name,
            email: userData.email,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to save user data")
      }

      // Handle the response from the server if needed
      const responseData = await response.json()
      console.log("User data saved successfully", responseData)
    } catch (error) {
      console.error("Error saving user data:", error)
    }
  }

  const scrollToRecipeFinder = () => {
    const navbarHeight = 95
    const mainContainerTop = document.querySelector(".main-container").offsetTop

    const scrollPosition = mainContainerTop - navbarHeight

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    })
  }

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
        <Nav.Link
          href="#"
          className="links-text"
          onClick={scrollToRecipeFinder}
        >
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
        {isAuthenticated && <h1 style={{fontSize: "15px"}}>{user.name}</h1>}
        <LoginButton />
        <LogoutButton />
      </div>
    </Navbar>
  )
}

export default NavbarComponent
