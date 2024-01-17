import React from "react";

const Review = ({ user_id, rating, comment }) => (
  <div className="bg-white p-1 sm:p-4 border-2 rounded-md mt-3 flex items-center">
    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
      <img
        src="https://www.amazon.in/avatar/default/amzn1.account.AHQPYJUY3PE4WW3YZBHSPVYM2OXA?square=true&max_width=460"
        alt="User Icon"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <p className=" font-bold text-[20px] text-black">{user_id}</p>
      <div className="flex items-center">
        <div className="flex space-x-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0l2.45 6.31h6.3l-5.1 4.6 1.95 6.3-6.3-4.75-6.3 4.75 1.95-6.3-5.1-4.6h6.3z"
              />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-gray-500">{rating}</span>
      </div>
      <p className="text-gray-700 mt-2 font-normal text-[20px]">{comment}</p>
    </div>
  </div>
);

export default Review;
