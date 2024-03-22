"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas({ ingredient }) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

export default function MealIdea({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadMealIdeas() {
      if (ingredient) {
        setIsLoading(true);
        const fetchedMeals = await fetchMealIdeas({ ingredient });
        setMeals(fetchedMeals);
        setIsLoading(false);
      }
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h1 className="text-xl font-bold text-black">Meal Ideas </h1>
      
      {/* Display the message if no ingredient is selected */}
      {!ingredient && (
        <p className="p-2 m-4 bg-orange-500 max-w-sm rounded-md drop-shadow-lg text-xl font-bold text-white text-center">
          Select an item to see meal ideas.
        </p>
      )}

      {/* Display the loading message if meals are being fetched */}
      {isLoading && (
        <p className="p-2 m-4 bg-orange-500 max-w-sm rounded-md drop-shadow-lg text-xl font-bold text-white text-center">
          Loading meal ideas...
        </p>
      )}

      {/* Display the message if no meals are found for the selected ingredient */}
      {ingredient && (!meals || meals.length === 0) && (
        <p className="p-2 m-4 bg-orange-500 max-w-sm rounded-md drop-shadow-lg text-xl font-bold text-white text-center">
          No meals found for this ingredient.
        </p>
      )}

      {/* Display the list of meal ideas if available */}
      {meals && meals.length > 0 && (
        <ul className="p-2 m-4 bg-orange-500 max-w-sm rounded-md drop-shadow-lg text-md text-white text-center">
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
