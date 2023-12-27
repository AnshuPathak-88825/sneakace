import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ rating }) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    return (
      <span key={index}>
        {rating >= starValue ? (
          <FaStar className="text-secondary text-xl" />
        ) : rating >= starValue - 0.5 ? (
          <FaStarHalfAlt className="text-secondary text-xl" />
        ) : (
          <AiOutlineStar className="text-secondary text-xl" />
        )}
      </span>
    );
  });

  return <span className="flex">{ratingStars}</span>;
};

export default Stars;
