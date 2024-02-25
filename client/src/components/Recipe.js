import React from "react";
import "./css/Recipefinder.css";

const RecipeCard = ({ recipes }) => {
  return (
    <div className="recipes-container">
      {recipes.map((recipe) => (
        <React.Fragment key={recipe._id}>
          <div className="recipe">
            {recipe.image && (
              <img
                className="recipeImage"
                src={`data:image/jpeg;base64,${recipe.image.toString(
                  "base64"
                )}`}
                alt={"afs"}
              />
            )}
            <h2>{recipe.name}</h2>
            <div>
              <p className="info-bullets">{recipe.preparationTime} min</p>
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecipeCard;
