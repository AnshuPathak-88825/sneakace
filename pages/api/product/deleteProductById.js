import dbConnect from "../../../dbConnect/db";
import Product from "../../../model/Product";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      await dbConnect();

      const productId = req.query.id;
      const deletedProduct = await Product.findByIdAndRemove(productId);

      if (!deletedProduct) {
        return res
          .status(404)
          .json({ success: false, error: "Product not found" });
      }

      res.status(200).json({ success: true, data: deletedProduct });
    } catch (error) {
      console.error("Error deleting product by ID:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
