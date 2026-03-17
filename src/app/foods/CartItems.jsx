"use client";
import React, { use } from "react";
import { CartContext } from "../../context/CartProvider";
import { Trash2, Plus, Minus } from "lucide-react"; // Icon er jonno (optional)

const CartItems = () => {
  const { cart } = use(CartContext);

  return (
    <div className=" p-6 bg-black shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">
        Shopping Cart ({cart.length})
      </h2>

      {cart.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Your cart is empty!
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-white pb-4 gap-4"
            >
              {/* Image Section */}
              <div className="w-24 h-24 shrink-0">
                <img
                  src={item.foodImg}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Details Section */}
              <div className="grow">
                <p className="text-sm text-orange-500 font-medium uppercase tracking-wider">
                  {item.category}
                </p>
                <h3 className="text-sm font-semibold text-gray-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-bold mt-1">
                  ${item.price}
                </p>
              </div>

              {/* Quantity & Action Section */}
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center border rounded-lg bg-gray-50">
                  <button className="p-1 hover:text-orange-600 transition">
                    <Minus size={15} />
                  </button>
                  <span className="px-1 font-semibold">1</span>
                  <button className="p-1 hover:text-orange-600 transition">
                    <Plus size={15} />
                  </button>
                </div>

                <button className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Total Summary */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between text-xl font-bold text-gray-300">
              <span>Total Amount:</span>
              <span>
                ${cart.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
            <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
