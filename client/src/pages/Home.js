import React, { useState, useEffect } from "react"
import RecipeCard from "../components/Recipe"
import DietTypeFilter from "../components/dietTypeFilter"
import MealCategoryFilter from "../components/mealCategoryFilter"

const Home = () => {
  const [mainFilter, setMainFilter] = useState(null)
  const [subFilter, setSubFilter] = useState(null)

  const handleMainFilterSelect = (filter) => {
    setMainFilter(filter)
  }

  const handleSubFilterSelect = (type, filter) => {
    setSubFilter(filter)
    // Save the filters and transfer to other screen
    // For now, just log the selected filters
    sendRecipeRequest();
    console.log(`Main filter: ${mainFilter}, Sub filter: ${subFilter}`)
  }

  useEffect(() => {
    console.log(`Sub filter updated: ${subFilter}`)
  }, [subFilter])

  const sendRecipeRequest = async (mainFilter, subFilter) => {
    try {
      const response = await fetch("https://localhost:5050/api/recipes/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers you may need, such as authorization tokens
        },
        body: JSON.stringify({
          dietTypeFilter: mainFilter,
          mealCategoryFilter: subFilter,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save user data")
      }

      // Handle the response from the server if needed
      const responseData = await response.json()
      return responseData;
    } catch (error) {
      console.error("Error saving user data:", error)
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
      <RecipeCard />
    </div>
  )
}

export default Home
