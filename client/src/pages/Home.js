import React, { useState, useEffect } from "react"
import RecipeCard from "../components/Recipe"
import DietTypeFilter from "../components/dietTypeFilter"
import MealCategoryFilter from "../components/mealCategoryFilter"

const Home = () => {
  const [mainFilter, setMainFilter] = useState(null)
  const [subFilter, setSubFilter] = useState(null)
  const [recipes, setRecipes] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleMainFilterSelect = (filter) => {
    setMainFilter(filter)
  }

  const handleSubFilterSelect = (type, filter) => {
    setSubFilter(filter)
    sendRecipeRequest(mainFilter, subFilter)
    console.log(`Main filter: ${mainFilter}, Sub filter: ${subFilter}`)
  }

  useEffect(() => {
    console.log(`Sub filter updated: ${subFilter}`)
  }, [subFilter])

  const sendRecipeRequest = async (mainFilter, subFilter) => {
    try {
      const response = await fetch("http://localhost:5050/api/recipes/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dietTypeFilter: mainFilter,
          mealCategoryFilter: subFilter,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch recipes")
      }

      // Handle the response from the server if needed
      const responseData = await response.json()
      console.log(responseData)
      setRecipes(responseData)
      setIsLoading(false)

      return responseData
    } catch (error) {
      console.error("Error fetching recipes:", error)
    }
  }

  return (
    <div className="home">
      <DietTypeFilter onSelect={handleMainFilterSelect} />
      {mainFilter && (
        <MealCategoryFilter
          type={mainFilter}
          onSelect={handleSubFilterSelect}
        />
      )}
      {isLoading ? <h1>Loading...</h1> : <RecipeCard recipes={recipes} />}
    </div>
  )
}

export default Home
