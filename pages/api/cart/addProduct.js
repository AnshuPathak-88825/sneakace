import dbConnect from "../../../dbConnect/db";
import Cart from "../../../model/Cart";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { user_id, product_id, variationId, quantity } = req.body;

      console.log(req.body);
      let cart = await Cart.findOne({ user_id });

      if (!cart) {
        cart = await Cart.create({ user_id, products: [] });
      }

      const existingProductIndex = cart.products.findIndex(
        (product) =>
          product.product.toString() === product_id &&
          product.variationId === variationId
      );

      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += quantity || 1;
      } else {
        cart.products.push({
          product: product_id,
          variationId,
          quantity: quantity || 1,
        });
      }

      await cart.save();

      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
