import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import SingleRecipe from "../components/SingleRecipe"
import { Spinner } from "react-bootstrap"

const Recipe = () => {
  const [recipe, setRecipe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const ridParam = urlParams.get("rID")

  //fetch recipe
  useEffect(() => {
    const sendRecipeRequest = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(
          "https://recipe-finder-server-xgd5.onrender.com/api/recipes/" + ridParam,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        if (!response.ok) {
          throw new Error("Failed to fetch recipes")
        }
        const responseData = await response.json()
        setRecipe(responseData)
        console.log(responseData)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      } finally {
        setIsLoading(false) // Set loading state to false after fetching
      }
    }

    sendRecipeRequest()
  }, [ridParam])

  if (isLoading) {
    return (
      <center>
        <Spinner
          style={{ marginTop: "50px" }}
          animation="border"
          role="status"
          variant="warning"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </center>
    )
  }

  return (
    <div>
      <SingleRecipe recipe={recipe} />
    </div>
  )
}

export default Recipe
