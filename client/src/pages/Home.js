import React, { useState, useEffect } from "react";
import RecipeCard from "../components/Recipe";
import DietTypeFilter from "../components/dietTypeFilter";
import MealCategoryFilter from "../components/mealCategoryFilter";

const Home = () => {
  const [mainFilter, setMainFilter] = useState(null);
  const [subFilter, setSubFilter] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMainFilterSelect = (filter) => {
    setMainFilter(filter);
  };

  const handleSubFilterSelect = (type, filter) => {
    setSubFilter(filter);
    // setIsLoading(true);
  };

  useEffect(() => {
    console.log(`Sub filter updated: ${subFilter}`);
  }, [subFilter]);

  useEffect(() => {
    // Fetch recipes when mainFilter changes
    if (mainFilter !== null && subFilter !== null) {
      setIsLoading(true);
      sendRecipeRequest(mainFilter, subFilter);
    }
  }, [mainFilter, subFilter]);

  const sendRecipeRequest = async (mainFilter, subFilter) => {
    try {
      const response = await fetch("http://localhost:5050/api/recipes/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dietTypeFilter: mainFilter,
          mealCategoryFilter: subFilter,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const responseData = await response.json();
      console.log(responseData);
      setRecipes(responseData);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home">
      <DietTypeFilter onSelect={handleMainFilterSelect} />
      {mainFilter && (
        <MealCategoryFilter
          type={mainFilter}
          onSelect={handleSubFilterSelect}
        />
      )}
      {isLoading ? <h1>Loading...</h1> : recipes && <RecipeCard recipes={recipes} />}
    </div>
  );
};

export default Home;
