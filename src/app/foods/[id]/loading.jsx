import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Skeleton */}
        <div className="h-100 bg-gray-300 rounded-2xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-5">
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
          <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 rounded"></div>

          <div className="flex gap-4 pt-5">
            <div className="h-12 w-40 bg-gray-300 rounded-xl"></div>
            <div className="h-12 w-32 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
