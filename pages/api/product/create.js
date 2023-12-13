import dbConnect from "../../../dbConnect/db";
import Product from "../../../model/Product";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      console.log(req.body);
      const product = new Product(req.body);
      console.log("here is our product:", product);

      const savedProduct = await product.save();

      res.status(201).json({ success: true, data: savedProduct });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
