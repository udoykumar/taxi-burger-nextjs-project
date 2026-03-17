"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleAddToCart = () => {
    addToCart(food);
    // Simulate adding to cart functionality
    setInCart(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 text-sm bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-center disabled:bg-gray-400 disabled:cursor-not-allowed "
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CartButton;
