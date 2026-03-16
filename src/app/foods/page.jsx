import React from "react";
import FoodCard from "../../components/cards/FoodCard";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 300));
  return data.foods || [];
};
const Foods = async () => {
  const foods = await getFoods();
  const filterFood = foods.filter(
    (food) => food.category.toLowerCase() !== "beef",
  );
  return (
    <div className="">
      <h2 className="text-4xl font-bold">
        Total: <span className="text-yellow-500">({filterFood.length})</span>{" "}
        Found
      </h2>
      <div className="flex gap-5">
        <div className="grid grid-cols-3 gap-5 my-5">
          {filterFood.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="w-62.5 border-2 rounded-lg p-3">
          <h2 className="text-2xl font-bold text-center">cart item</h2> <hr />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default Foods;
