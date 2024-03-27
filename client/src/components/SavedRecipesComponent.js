import React, { useState, useEffect } from "react"
import "./css/SavedRecipesComponent.css"
import { useAuth0 } from "@auth0/auth0-react"
import RecipeCard from "./Recipe"
import { Spinner } from "react-bootstrap"

const SavedRecipesComponent = () => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true) // Initially set to true
  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    const getSavedRecipes = async () => {
      setIsLoading(true) // Ensure loading state is true at the start of the call
      try {
        if (!isAuthenticated || !user) {
          setIsLoading(false)
          return // Exit early if user is not authenticated or undefined
        }

        const response = await fetch("https://recipe-finder-server-xgd5.onrender.com/get-favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to fetch recipe IDs")
        }

        const responseData = await response.json()
        const recipeIds = responseData[0].saved_recipes // Assuming this is an array of IDs

        // Fetch full recipe data for each ID
        const recipeDataPromises = recipeIds.map((id) =>
          fetch(`https://recipe-finder-server-xgd5.onrender.com/api/recipes/${id}`).then((res) =>
            res.json()
          )
        )

        const fullRecipesData = await Promise.all(recipeDataPromises)
        setRecipes(fullRecipesData) // Set the full recipes data
      } catch (error) {
        console.error("Error fetching recipes:", error)
      } finally {
        setIsLoading(false) // Set loading to false after fetching data
      }
    }

    getSavedRecipes()
  }, [isAuthenticated, user]) // Dependency array

  if (isLoading) {
    return (
      <center>
        <Spinner
          animation="border"
          role="status"
          variant="warning"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </center>
    ) // Show loading indicator while fetching data
  }

  if (!isAuthenticated) {
    return (
      <center>
        <Spinner
          animation="border"
          role="status"
          variant="warning"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </center>
    )
  }

  return (
    <div className="saved-recipes">
      <h1 className="saved-title">Saved Recipes</h1>
      <div>
        <RecipeCard recipes={recipes} />
      </div>
    </div>
  )
}

export default SavedRecipesComponent
