"use client"

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    //return the meal ideas by ingredient from API endpoint
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals;
}

export default function MealIdeas( {ingredient} ) {

    //define state variable for meals
    const [meals, setMeals] = useState([]);
    
    //define function loadMealIdeas
    async function loadMealIdeas() {
        try {
            const meals = await fetchMealIdeas(ingredient);

            //ingredients or meal is null, set meals as empty array
            if (!meals || !ingredient)
                setMeals([]);            
            else
                setMeals(meals);

        } catch (error) {
            console.error(error);
        }
    }

    //useEffect hook to call loadMealIdeas
    useEffect(() => {       
            loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h3 className="text-xl font-bold">Meal Ideas</h3>
            <div>                
                {
                    /* set the default display message */
                    !ingredient ? 
                        <p>Select an item to see meal ideas</p> : 
                        meals.length == 0 ? <p>No meal ideas found for {ingredient}</p> :
                            <p>Here are some meal ideas using {ingredient}:</p>                                
                }                                  
                <ul>                    
                    {
                        /* display the meal ideas list */
                        meals.map((meal) => (
                            <li key={meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
                                {meal.strMeal}
                            </li> ))
                    }
                </ul>
            </div>
        </div>
    );

}