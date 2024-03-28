import React from "react"
import "./css/LearnMoreButton.css" // Import your CSS file

const LearnMoreButton = ({ recipeID }) => {

  const handleClick = () => {
    console.log("learned..")
    window.location.href = "/recipe?rID=" + recipeID
  }

  return (
    <div className="learn-more-container">
      <p
        className={"learn-more-button"}
        onClick={handleClick}

      >
        Learn More
      </p>
    </div>
  )
}

export default LearnMoreButton
