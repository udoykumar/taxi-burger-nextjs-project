// app/foods/[id]/page.jsx
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const { details = {} } = await res.json();
  return {
    title: details.title,
  };
}
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">Food Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-10 py-20 bg-black rounded-lg">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={food.foodImg}
            alt={food.title}
            width={300}
            height={150}
            className="w-full h-100 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details */}
        <div className="space-y-5 text-white">
          <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
            {food.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-400">{food.title}</h1>

          <p className="text-3xl font-semibold text-green-600">${food.price}</p>
          <p className="text-gray-500 font-bold">{food.area}</p>
          <div className="flex gap-4 pt-5">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
              Add to Cart
            </button>

            <a
              href={food.video}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-900 transition"
            >
              video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
