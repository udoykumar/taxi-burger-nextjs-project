import React from "react";
import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeletons";

const loading = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5">
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
