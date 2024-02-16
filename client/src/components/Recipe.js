import React from "react"
import ReviewCard from "../components/ReviewCard"
import "../index.css"

const RecipeCard = ({recipes}) => {
  return (
    <div className="recipe">
        {recipes.map((recipe) => (
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
            <div>
              <ReviewCard reviews={recipe.reviews}></ReviewCard>
            </div>
            </div>
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default RecipeCard;
