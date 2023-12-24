import dbConnect from "../../../dbConnect/db";
import Wishlist from "../../../model/Wishlist";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { user_id, product_id, variationId } = req.body;
      console.log(variationId);

      let wishlist = await Wishlist.findOne({ user_id });

      if (!wishlist) {
        wishlist = await Wishlist.create({ user_id, products: [] });
      }

      const existingProductIndex = wishlist.products.findIndex(
        (product) =>
          product.product.toString() === product_id &&
          product.variationId === variationId
      );

      if (existingProductIndex === -1) {
        wishlist.products.push({
          product: product_id,
          variationId,
        });
      }

      await wishlist.save();

      res.status(200).json({ success: true, data: wishlist });
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
