import dbConnect from "../../../dbConnect/db";
import Product from "../../../model/Product"; // Import your product model

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const products = await Product.find();

      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
