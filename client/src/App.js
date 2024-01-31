import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

//pages & components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Profile />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
