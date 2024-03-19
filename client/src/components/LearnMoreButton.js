import React, { useState } from "react"
import "./css/LearnMoreButton.css" // Import your CSS file

const LearnMoreButton = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    console.log("learned..")
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
