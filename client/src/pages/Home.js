import React from "react"
import Banner from "../components/Banner"
import RecipeFinder from "../components/RecipeFinder"
import FAQComponent from "../components/FAQComponent"

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <FAQComponent />
      <RecipeFinder />
    </div>
  )
}

export default Home
