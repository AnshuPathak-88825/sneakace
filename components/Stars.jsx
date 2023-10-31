import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar, AiFillCheckSquare } from "react-icons/ai";
const Stars = ({rating}) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-orange-500" />
        ) : rating >= numbers ? (
          <FaStarHalfAlt className="text-orange-500" />
        ) : (
          <AiOutlineStar className="text-primary" />
        )}
      </span>
    );
  });
  return (
    <span className="flex">
      {ratingStar} 
    </span>
  )
};

export default Stars;
