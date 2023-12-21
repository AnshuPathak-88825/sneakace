import dbConnect from "../../../dbConnect/db";
import Wishlist from "../../../models/Wishlist";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { user_id, product_id } = req.body;

      let wishlist = await Wishlist.findOne({ user_id });

      if (!wishlist) {
        wishlist = await Wishlist.create({ user_id, products: [] });
      }

      wishlist.products.push(product_id);
      await wishlist.save();

      res.status(201).json({ success: true, data: wishlist });
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
