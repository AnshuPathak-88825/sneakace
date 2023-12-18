const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartItemSchema);

module.exports = Cart;
