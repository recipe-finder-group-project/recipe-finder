import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

//pages & components
import Home from "./pages/Home"
import NavbarComponent from "./components/Navbar"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;