const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productNumber: {
    type: String,
    required: true,
    unique: true,
  },
  productShortDescription: {
    type: String,
    required: true,
  },
  productLongDescription: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },

  variations: [
    {
      productSize: {
        type: String,
        required: true,
      },
      productColor: {
        type: String,
        required: true,
      },
      productCategory: {
        type: String,
        required: true,
      },
      productPattern: {
        type: String,
        required: true,
      },
      productImage: {
        type: [String],
      },
    },
  ],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = Product;
