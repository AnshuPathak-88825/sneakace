import React, { useEffect, useState } from "react";
import Review from "../components/SingleReview.jsx";
import { FaStar } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext.js";
import axios from "axios";
import FillupButton from "../components/FillupButton.jsx"
const ReviewsSection = ({ product_id }) => {
  const { user } = UserAuth();
  const user_id = user.email.split("@")[0];

  const [newReview, setNewReview] = useState({
    product_id,
    user_id: user_id,
    rating: 0,
    comment: "",
  });

  const [reviews, setReviews] = useState([]);
  const [reviewChanges, setReviewChanges] = useState([]);

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const handleRatingChange = (value) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      rating: value,
    }));
  };

  const handleCommentChange = (e) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      comment: e.target.value,
    }));
  };

  const handleSubmitReview = async () => {
    try {
      const response = await axios.post(
        "/api/product-review/addReview",
        newReview
      );

      if (response.status === 200) {
        console.log("Review submitted successfully");
        console.log(response.data);
        setReviews((prevReviews) => [...prevReviews, newReview]);
        setReviewChanges(newReview);
        setNewReview({
          product_id,
          user_id: user_id,
          rating: 0,
          comment: "",
        });
      } else {
        console.error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  useEffect(() => {
    const getProductReviews = async () => {
      const reviews = await axios.get(
        `/api/product-review/getReviews?product_id=${product_id}`
      );
      setReviews(reviews.data.data);
    };
    getProductReviews();
  }, [reviewChanges]);

  return (
    <div className="container my-4 p-2  bg-white text-black ">
      <div className="flex items-start mb-8 flex-wrap  ">
        <div className="w-full md:w-1/2  ">
          <h1 className="text-[27px] font-bold text-gray-700">Average Rating</h1>
          <div className="flex items-center space-x-2 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`w-6 h-6 ${star <= averageRating ? "text-yellow-300" : "text-gray-300"
                  }`}
              />
            ))}
            <span className="ml-2 text-xl font-bold">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <div>

            {reviews.map((review, index) => (
              <Review key={index} {...review} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="flex-row flex-wrap items-center ">
            <div className="flex items-center space-x-2 m-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${star <= newReview.rating
                    ? "text-yellow-300"
                    : "text-gray-300"
                    }`}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
            </div>
            <div>
              <textarea
                value={newReview.comment}
                onChange={handleCommentChange}
                placeholder="Write your review..."
                className="outline-none border-2 rounded p-2 sm:m-2 w-[220px] h-[100px] m-auto sm:w-[300px] text-gray-700"
              />
            </div>
            <div onClick={handleSubmitReview} className="font-Poppins_light cursor-pointer text-white border-2  inline  bg-gray-600  rounded-sm	 m-2 py-3 px-7 font-Poppins_light">
              Submit


            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default ReviewsSection;
