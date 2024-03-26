import React, { useState, useEffect } from "react"
import "./css/Recipefinder.css"
import LearnMoreButton from "./LearnMoreButton"
import { userLocation } from "react-router-dom"

const RecipeCard = ({ recipes }) => {
  const [path, setPath] = useState(false)

  useEffect(() => {
    if (window.location.pathname === "/saved") {
      setPath(true)
      console.log("saved-path")
    }
  }, [])

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
              {path && <p className="remove-button">⤫</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeCard
