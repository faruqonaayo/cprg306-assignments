"use-client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const response = await fetchMealIdeas(ingredient);
      setMeals(response.meals);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h1 className="text-4xl font-black my-10">Meal Ideas</h1>
      <ul>
        {meals !== null &&
          meals.map((meal) => {
            return (
              <li key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
