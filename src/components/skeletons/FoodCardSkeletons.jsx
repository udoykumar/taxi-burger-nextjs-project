// FoodCardSkeleton.jsx
import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="bg-slate-700 rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-52 bg-gray-300"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>

        <div className="flex gap-2 mt-4">
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
