import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import SingleRecipe from "../components/SingleRecipe"
// const { ObjectId } = require("mongoose")


const Recipe = () => {
  const [recipe, setRecipe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const ridParam = urlParams.get("rID")

  useEffect(() => {
    const sendRecipeRequest = async () => {
      setIsLoading(true); // Set loading state to true before fetching

      try {
        const response = await fetch(
          "http://localhost:5050/api/recipes/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "_id": '65c38173bd5ed41ba2f46a3a'
            }),
          }
        )

        if (!response.ok) {
          throw new Error("Failed to fetch recipes")
        }
        const responseData = await response.json()
        setRecipe(responseData)
        console.log(recipe)
        console.log(responseData)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      } finally {
        setIsLoading(false); // Set loading state to false after fetching
      }
    };

    sendRecipeRequest(); // Call the function
  }, [ridParam]); // Listen for changes in ridParam

  if (isLoading) {
    return <div>Loading...</div>; // Render loading state
  }

  return (
    <div>
      <h1>{ridParam}</h1>
      <SingleRecipe recipe={recipe} />
    </div>
  )
}

export default Recipe
