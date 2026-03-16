import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 animate-pulse">
      {/* Top Section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>

        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>

      {/* Rating Skeleton */}
      <div className="flex gap-2 mt-4">
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
      </div>

      {/* Review Text Skeleton */}
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <div className="h-3 bg-gray-200 rounded w-20"></div>
        <div className="h-8 w-16 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
