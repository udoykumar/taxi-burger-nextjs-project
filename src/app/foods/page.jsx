import React from "react";
import FoodCard from "../../components/cards/FoodCard";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";
const getFoods = async (search) => {
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } },
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 300));
  return data.foods || [];
};

export const metadata = {
  title: "Foods",
  description: "Fast Food in Noakhali",
};
const Foods = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);
  const filterFood = foods.filter(
    (food) => food.category.toLowerCase() !== "beef",
  );
  return (
    <div className="">
      <h2 className="text-4xl font-bold">
        Total: <span className="text-yellow-500">({filterFood.length})</span>{" "}
        Found
      </h2>
      <div className="my-4">
        <InputSearch />
      </div>

      <div className="flex flex-col lg:flex-row gap-5 my-5">
        {filterFood.length === 0 ? (
          <div>
            <h2 className="text-2xl font-bold">No Food Found</h2>
            <p className="text-gray-500">
              Try another search or check back later
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {filterFood.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}
        {/* Right Side: Fixed Cart Section */}
        <aside className="w-full lg:w-100 sticky top-25 self-start">
          <div className="max-h-140 overflow-y-auto rounded-xl shadow-2xl  ">
            <CartItems filterFood={filterFood} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Foods;
