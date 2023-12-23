const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      variationId: {
        type: String,
        required: true,
      },
    },
  ],
});

const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
