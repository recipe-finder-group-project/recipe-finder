import React, { useState, useEffect } from "react"
import DietTypeFilter from "../components/dietTypeFilter"
import MealCategoryFilter from "../components/mealCategoryFilter"
import { Spinner } from "react-bootstrap"
import RecipeCard from "./Recipe"
import "./css/Recipefinder.css"

const RecipeFinder = () => {
  const [mainFilter, setMainFilter] = useState(null)
  const [subFilter, setSubFilter] = useState(null)
  const [recipes, setRecipes] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleMainFilterSelect = (filter) => {
    setMainFilter(filter)
  }

  const handleSubFilterSelect = (type, filter) => {
    setSubFilter(filter)
  }

  useEffect(() => {
    console.log(`Sub filter updated: ${subFilter}`)
  }, [subFilter])

  useEffect(() => {
    if (mainFilter !== null && subFilter !== null) {
      setIsLoading(true)
      sendRecipeRequest(mainFilter, subFilter)
    }
  }, [mainFilter, subFilter])

  const sendRecipeRequest = async (mainFilter, subFilter) => {
    try {
      const response = await fetch("https://recipe-finder-server-xgd5.onrender.com/api/recipes/search", {
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
      const responseData = await response.json()
      console.log(responseData)
      setRecipes(responseData)
    } catch (error) {
      console.error("Error fetching recipes:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="main-container">
      <div className="contents">
        <h1 className="title">Recipe Finder</h1>
        <DietTypeFilter onSelect={handleMainFilterSelect} />
        <MealCategoryFilter
          type={mainFilter}
          onSelect={handleSubFilterSelect}
        />
        <div>
          {isLoading ? (
            <center>
              <Spinner
                style={{ marginTop: "50px" }}
                animation="border"
                role="status"
                variant="warning"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </center>
          ) : (
            recipes && <RecipeCard recipes={recipes} />
          )}
        </div>
      </div>
    </div>
  )
}

export default RecipeFinder
