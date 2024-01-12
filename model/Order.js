const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  variationId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  productImage: { type: String },
});

const orderSchema = new mongoose.Schema({
  orderID: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  pickupLocation: {
    type: String,
    required: true,
    default: "Primary",
  },
  comment: { type: String, default: "" },
  companyName: { type: String, required: true },
  billingCustomerName: { type: String, required: true },
  billingLastName: { type: String, default: "" },
  billingAddress: { type: String, required: true },
  billingAddress2: { type: String, default: "" },
  billingCity: { type: String, required: true },
  billingPincode: { type: String, required: true },
  billingState: { type: String, required: true },
  billingCountry: { type: String, required: true },
  billingEmail: { type: String, required: true },
  billingPhone: { type: String, required: true },
  shippingIsBilling: { type: Boolean, default: true },
  shippingCustomerName: { type: String, default: "" },
  shippingLastName: { type: String, default: "" },
  shippingAddress: { type: String, default: "" },
  shippingAddress2: { type: String, default: "" },
  shippingCity: { type: String, default: "" },
  shippingPincode: { type: String, default: "" },
  shippingCountry: { type: String, default: "" },
  shippingState: { type: String, default: "" },
  shippingEmail: { type: String, default: "" },
  shippingPhone: { type: String, default: "" },
  orderItems: [orderItemSchema],
  paymentMethod: { type: String, required: true },
  shippingCharges: { type: Number, default: 0 },
  transactionCharges: { type: Number, default: 0 },
  totalDiscount: { type: Number, default: 0 },
  subTotal: { type: Number, required: true },
  paymentStatus: { type: String, default: "pending" },
  orderStatus: { type: String, default: "pending" },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

module.exports = Order;
