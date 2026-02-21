import React from "react";
import ReviewCardSkeleton from "../components/skeletons/ReviewCardSkeleton";

const ReviewLoading = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5">
      {[...Array(12)].map((_, index) => (
        <ReviewCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ReviewLoading;
