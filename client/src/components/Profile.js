import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    // Call the function to send data to the backend when the component mounts
    if (isAuthenticated) {
      sendDataToBackend(user)
    }
  }, [isAuthenticated, user])

  const sendDataToBackend = async (userData) => {
    try {
      const response = await fetch("https://recipe-finder-server-f153.onrender.com/save-user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers you may need, such as authorization tokens
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save user data")
      }

      // Handle the response from the server if needed
      const responseData = await response.json()
      console.log("User data saved successfully", responseData)
    } catch (error) {
      console.error("Error saving user data:", error)
    }
  }

  return (
    isAuthenticated && (
      <article className="column">
        {/* {JSON.stringify(user)} */}
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
      </article>
    )
  )
}

export default Profile
