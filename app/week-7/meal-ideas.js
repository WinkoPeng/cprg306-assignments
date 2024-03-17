"use client"
import { useState } from "react"
import { useEffect } from "react"

async function fetchMealIdeas() {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals;
}

export default function MealIdeas( {ingredient} ) {
    const [meals, setMeal] = useState([]);   
    
    async function loadMealIdeas() {
        try {
            const meals = await fetchMealIdeas(ingredient);
            setMeal(data);            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    },[ingredient])
}

return(
    <div>
        <h3 className="text-x1 font-bold">Meal Ideas</h3>
        <div>
        {
        !ingredient ?(
            <p>
                Select an item to see meal ideas
            </p>
        ) : meals.length === 0 ? (
            <p>
                Here are some meal ideas using {ingredient}:
            </p>
        ) : null
    }
            <ul>
                {
                    meals.map((meal)=>
                    <li key={meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">{meal.strMeal}
                    </li>)
                }
            </ul>
        </div>
    </div>

)