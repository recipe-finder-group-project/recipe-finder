import React from "react"
import "./css/SingleRecipe.css"

const RecipeCard = ({ recipe }) => {
  if (!recipe) {
    return <div></div>
  }

  return (
    <div className="single-recipe">
      <React.Fragment key={recipe._id}>
        <div className="recipe-container">
          <div className="recipe-left">
            {recipe.image && (
              <img
                className="single-recipe-image"
                src={`data:image/jpeg;base64,${recipe.image.toString(
                  "base64"
                )}`}
                alt={"afs"}
              />
            )}
          </div>
          <div className="recipe-right">
            <h2>{recipe.name}</h2>
            <div className="info-bullets-container-s">
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

            <p>Ingredients : </p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Preparation : </p>
            <ul>
              {recipe.preparation.map((preparationStep, index) => (
                <li key={index}>{preparationStep}</li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default RecipeCard
