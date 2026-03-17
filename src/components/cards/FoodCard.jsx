import Link from "next/link";
import React from "react";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-black/90 text-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group p-3 ">
      {/* Image */}
      <div className="h-52 overflow-hidden rounded-lg">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300  "
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 flex flex-col">
        <h2 className="text-sm md:text-lg line-clamp-1 font-bold flex-1 ">
          {food.title}
        </h2>
        <p className="text-sm text-gray-300 font-bold">{food.category}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-semibold text-green-600">
            ${food.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <CartButton food={food} />
          <Link
            href={`/foods/${food.id}`}
            className="flex-1 text-sm border border-gray-300 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition-all duration-500 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
