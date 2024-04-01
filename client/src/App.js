import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

//pages & components
import Home from "./pages/Home"
import Recipe from "./pages/Recipe"
import Saved from "./pages/SavedRecipes"
import NavbarComponent from "./components/Navbar"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
