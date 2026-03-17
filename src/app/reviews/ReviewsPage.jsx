"use client";
import React, { useEffect, useState } from "react";
import ReviewCard from "../../components/review/ReviewCard";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  if (loading) {
    return <ReviewLoading />;
  }
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">
        Total: <span className="text-yellow-500">({reviews.length})</span>
        Reviews
      </h2>
      <div className="grid grid-cols-3 gap-5 my-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
