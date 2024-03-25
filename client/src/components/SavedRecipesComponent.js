import React, { useState, useEffect } from "react"
import "./css/SavedRecipesComponent.css"
import { useAuth0 } from "@auth0/auth0-react"

const SavedRecipesComponent = () => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true) // Initially set to true
  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    const getSavedRecipes = async () => {
      try {
        if (!isAuthenticated || !user) {
          setIsLoading(false)
          return; // Exit early if user is not authenticated or undefined
        }

        const response = await fetch("http://localhost:5050/get-favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to fetch recipes")
        }
        const responseData = await response.json()
        console.log(responseData)
        setRecipes(responseData[0].saved_recipes) // Accessing saved_recipes from the response data
      } catch (error) {
        console.error("Error fetching recipes:", error)
      } finally {
        setIsLoading(false) // Set loading to false after fetching data (whether successful or not)
      }
    }

    getSavedRecipes()
  }, [isAuthenticated, user])

  if (isLoading) {
    return <h1>Loading...</h1> // Show loading indicator while fetching data
  }

  if (!isAuthenticated) {
    return <h1>Please log in to view saved recipes.</h1>
  }

  return (
    <div className="saved-recipes">
      <h1>Saved Recipes</h1>
      <h2>{JSON.stringify(recipes)}</h2>
    </div>
  )
}

export default SavedRecipesComponent
