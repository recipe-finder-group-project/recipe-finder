import React, { useState } from "react"
import "./css/HeartButton.css" // Import your CSS file

const SaveRecipeButton = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true);

    // Delay the color change back to black
    setTimeout(() => {
      setClicked(false);
    }, 750); // Half of the animation duration for each direction

    // Ensure the color is reset to blue after the full animation duration
    setTimeout(() => {
      setClicked(false);
    }, 1500); // Animation duration is 3 seconds
  };

  return (
    <button
      className={`heartButton ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
     Save ♡
    </button>
  )
}

export default SaveRecipeButton
