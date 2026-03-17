import React from "react";
import ReviewsPage from "./ReviewsPage";
export const metadata = {
  // title: "All Reviews",
  title: {
    absolute: "Satisfied Customers",
  },
  description: "All Reviews Page",
};
const AllReviews = () => {
  return (
    <div>
      <ReviewsPage />
    </div>
  );
};

export default AllReviews;
