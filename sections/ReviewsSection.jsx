import React, { useEffect, useState } from "react";
import Review from "../components/SingleReview.jsx";
import { FaStar } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext.js";
import axios from "axios";

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
    <div className="container mx-auto p-4 bg-white text-black">
      {/* Top Section */}
      <div className="flex items-center mb-8">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">Average Rating</h1>
          <div className="flex items-center space-x-2 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`w-6 h-6 ${
                  star <= averageRating ? "text-yellow-300" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-xl font-bold">
              {averageRating.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          {[5, 4, 3, 2, 1].map((value) => (
            <div key={value} className="flex flex-col items-center mr-4">
              <span className="text-gray-500">
                {value} (
                {`${
                  (reviews.filter((review) => review.rating === value).length /
                    reviews.length) *
                  100
                }%`}
                )
              </span>
              <div className="bg-green-200 w-16 h-2 mt-2 relative">
                <div
                  className="bg-yellow-500 h-full rounded-r-full"
                  style={{
                    width: `${
                      (reviews.filter((review) => review.rating === value)
                        .length /
                        reviews.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Reviews ({reviews.length})</h2>
          {/* Add Review Form */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${
                    star <= newReview.rating
                      ? "text-yellow-300"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
            </div>
            <textarea
              value={newReview.comment}
              onChange={handleCommentChange}
              placeholder="Write your review..."
              className="mx-2 px-2 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={handleSubmitReview}
              className="bg-primary text-black px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
        {/* Review Components */}
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
