import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Recipe = () => {
  const location = useLocation()


    const urlParams = new URLSearchParams(location.search)
    const ridParam = urlParams.get("rID")

    console.log(ridParam)

  return (
    <div>
      <h1>{ridParam}</h1>
    </div>
  )
}

export default Recipe
