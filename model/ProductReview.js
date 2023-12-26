const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_id: {
    type: String, // Assuming user ID is a string
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  verifiedPurchase: {
    type: Boolean,
    default: false,
  },
});

const productReviewSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  reviews: [reviewSchema],
});

const ProductReview =
  mongoose.models.ProductReview ||
  mongoose.model("ProductReview", productReviewSchema);

module.exports = ProductReview;
