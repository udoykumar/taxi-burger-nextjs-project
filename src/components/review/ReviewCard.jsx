import React from "react";

const ReviewCard = ({ review }) => {
  const {
    user,
    email,
    photo,
    rating,
    review: reviewText,
    likes,
    date,
  } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-black/80 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-400">{user}</h3>
          <p className="text-sm text-gray-300">{email}</p>
        </div>

        <span className="text-xs text-gray-400">{formattedDate}</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < rating ? (
              <span className="text-yellow-400 text-lg">★</span>
            ) : (
              <span className="text-gray-300 text-lg">★</span>
            )}
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="mt-4  text-gray-400 leading-relaxed">{reviewText}</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-sm text-gray-400">👍 {likes.length} Likes</span>

        <button className="text-sm px-4 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-black transition">
          Like
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
