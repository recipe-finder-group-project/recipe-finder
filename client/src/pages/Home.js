import React, { useEffect, useState } from "react"
import ReviewCard from "../components/ReviewCard"
import '../index.css'



const Home = () => {
  const [recipes, setRecipes] = useState(null)
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("https://recipe-finder-server-f153.onrender.com/recipes")
      const json = await response.json()

      if (response.ok) {
        setRecipes(json)
      }
    }
    fetchRecipes()
  }, [])

  return (
    <div className="home">
      <div className="recipes">
        {recipes &&
          recipes.map((recipe) => (
            <React.Fragment key={recipe._id}>
              <h2>{recipe.name}</h2>
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
              <div>
                <ReviewCard reviews={recipe.reviews}></ReviewCard>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  )
}

export default Home
