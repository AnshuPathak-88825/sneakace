// pages/api/products/getProductById.js
import dbConnect from "../../../dbConnect/db";
import Product from "../../../model/Product";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();

      const productId = req.query.id;
      const product = await Product.findById(productId);

      if (!product) {
        return res
          .status(404)
          .json({ success: false, error: "Product not found" });
      }

      res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
