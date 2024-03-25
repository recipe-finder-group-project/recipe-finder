import React, { useEffect, useState } from "react"
import "./css/SaveRecipeButton.css"
import { useAuth0 } from "@auth0/auth0-react"

const SaveRecipeButton = ({ recipeID }) => {
  const { user, isAuthenticated } = useAuth0()
  const [isSaved, setIsSaved] = useState(false)

  // useEffect(() => {

  // }, [])

  const handleClick = () => {
    if (!isSaved) {
      saveRecipe(user.email, recipeID)
    }
  }

  const saveRecipe = async (email, recipe_id) => {
    try {
      const response = await fetch("http://localhost:5050/add-to-favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          recipe: recipe_id,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save recipe")
      }

      const responseData = await response.json()
      console.log("Recipe saved successfully", responseData)
      setIsSaved(true) // Update state to indicate recipe is saved
    } catch (error) {
      console.error("Error saving recipe:", error)
    }
  }

  return (
    <div>
      {isAuthenticated && (
        <p onClick={handleClick} className={`save-button ${isSaved ? 'saved' : ''}`}>
          {isSaved ? '✔' : 'Add to favorites'}
        </p>
      )}
    </div>
  )
}

export default SaveRecipeButton
