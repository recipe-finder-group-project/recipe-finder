import React, { useState, useEffect } from "react"
import "./css/Recipefinder.css"
import LearnMoreButton from "./LearnMoreButton"
import { useAuth0 } from "@auth0/auth0-react"

const RecipeCard = ({ recipes }) => {
  const [path, setPath] = useState(false)
  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    if (window.location.pathname === "/saved") {
      setPath(true)
      console.log("saved-path")
    }
  }, [])

  const removeRecipe = async (id) => {
    try {
      const response = await fetch(
        "https://recipe-finder-server-xgd5.onrender.com/remove-from-favorites",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            recipe: id,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to remove the recipe")
      }

      const responseData = await response.json()
      window.location.reload()
      console.log("Recipe removed successfully", responseData)
    } catch (error) {
      console.error("Error removing recipe:", error)
    }
  }

  return (
    <div className="recipes-container">
      {recipes.map((recipe) => (
        <div className="recipe" key={recipe._id}>
          <div className="recipe-content">
            {recipe.image && (
              <img
                className="recipeImage"
                src={`data:image/jpeg;base64,${recipe.image.toString(
                  "base64"
                )}`}
                alt={"afs"}
              />
            )}
            <h2 className="recipe-name">{recipe.name}</h2>
            {path && (
              <p
                className="remove-button"
                onClick={() => removeRecipe(recipe._id)}
              >
                ⤫
              </p>
            )}
            <div className="info-bullets-container">
              <LearnMoreButton recipeID={recipe._id} />
              <p className="info-bullets">{recipe.preparationTime} minutes</p>
              <p className="info-bullets">
                {recipe.difficulty === 1 && (
                  <>
                    <span>Easy - </span>
                    {[...Array(recipe.difficulty)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </>
                )}
                {recipe.difficulty === 2 && (
                  <>
                    <span>Medium - </span>
                    {[...Array(recipe.difficulty)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </>
                )}
                {recipe.difficulty === 3 && (
                  <>
                    <span>Hard - </span>
                    {[...Array(recipe.difficulty)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeCard
