import dbConnect from "../../../dbConnect/db";
import Cart from "../../../model/Cart";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      await dbConnect();

      const { user_id, product_id, variationId } = req.body;

      const cart = await Cart.findOne({ user_id });

      if (!cart) {
        return res
          .status(404)
          .json({ success: false, error: "Cart not found" });
      }

      // Remove the product with the matching product_id and variationId
      cart.products = cart.products.filter(
        (product) =>
          product.product.toString() !== product_id ||
          product.variationId !== variationId
      );

      await cart.save();

      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      console.error("Error deleting product from cart:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
