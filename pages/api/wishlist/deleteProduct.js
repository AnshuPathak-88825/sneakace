import dbConnect from "../../../dbConnect/db";
import Wishlist from "../../../models/Wishlist";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      await dbConnect();

      const { user_id, product_id } = req.body;

      const wishlist = await Wishlist.findOne({ user_id });

      if (!wishlist) {
        return res
          .status(404)
          .json({ success: false, error: "Wishlist not found" });
      }

      wishlist.products = wishlist.products.filter(
        (productId) => productId.toString() !== product_id
      );
      await wishlist.save();

      res.status(200).json({ success: true, data: wishlist });
    } catch (error) {
      console.error("Error deleting product from wishlist:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
