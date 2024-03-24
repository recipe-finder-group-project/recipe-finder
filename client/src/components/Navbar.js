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
      const response = await fetch("http://localhost:5050/save-user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save user data")
      }

      const responseData = await response.json()
      console.log("User data saved successfully", responseData)
    } catch (error) {
      console.error("Error saving user data:", error)
    }
  }

  const scrollToRecipeFinder = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/?scroll=true"
    }
    else{
      const navbarHeight = 95
      const mainContainerTop =
        document.querySelector(".main-container").offsetTop

      const scrollPosition = mainContainerTop - navbarHeight

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      })
    }
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
      <Navbar.Brand href="/" className="gradient-text">
        Healthy
      </Navbar.Brand>
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
        {isAuthenticated && (
          <Nav.Link href="#" className="links-text">
            Saved Recipes
          </Nav.Link>
        )}
      </Nav>
      {isAuthenticated && (
        <h1 className="name">{user.name}</h1>
      )}
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
    </Navbar>
  )
}

export default NavbarComponent
