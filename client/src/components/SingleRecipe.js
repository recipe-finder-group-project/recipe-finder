import React from "react"
import "../index.css"

const RecipeCard = ({ recipe }) => {
  // Check if recipe is null or undefined
  if (!recipe) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  return (
    <div className="recipe">
      <React.Fragment key={recipe._id}>
        <div className="recipes">
          <h2>{recipe.name}</h2>
          {recipe.image && (
            <img
              className="recipeImage"
              src={`data:image/jpeg;base64,${recipe.image.toString(
                "base64"
              )}`}
              alt={"afs"}
            />
          )}
          <p>Diet Type - {recipe.dietType}</p>
          <p>Meal Category - {recipe.mealCategory}</p>
          <p>Preparation time - {recipe.preparationTime} min</p>
          <p>Difficulty - {recipe.difficulty}*</p>
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
      </React.Fragment>
    </div>
  )
}

export default RecipeCard;
