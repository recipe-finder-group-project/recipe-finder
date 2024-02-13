import React, { useEffect, useState } from "react"
import RecipeCard from "../components/Recipe"
import dietTypeFilter from "../components/dietTypeFilter"
import mealCategoryFilter from "../components/mealCategoryFilter"
import "../index.css"

const Home = () => {
  return (
    <div className="home">
      <RecipeCard/>
    </div>
  )
}

export default Home
