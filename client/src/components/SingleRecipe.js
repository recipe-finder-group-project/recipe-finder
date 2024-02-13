{/* {recipe && (
          <React.Fragment key={recipe._id}>
            <h2>{recipe.name}</h2>
            <img
              className="recipeImage"
              src={`data:image/jpeg;base64,${recipe.image.toString("base64")}`}
              alt={"afs"}
            />
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
        )} */}