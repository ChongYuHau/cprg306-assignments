"use client";

import React, { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas based on ingredient
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  // Function to load meal ideas and set the meals state
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []);
  };

  // Use useEffect to load meal ideas when the ingredient prop changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const mealText = ingredient ? (
    meals.length === 0 ? (
      <p>No meals found for {ingredient}</p>
    ) : (
      <p>Here are some meal ideas for {ingredient}:</p>
    )
  ) : (
    <p>Here are some meal ideas</p>
  );
  // Render the component
  return (
    <>
      <h1>Meal Ideas</h1>
      {mealText}
      <ul>
        {meals.map((meal) => (
          <li
            class="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
            key={meal.idMeal}
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MealIdeas;
