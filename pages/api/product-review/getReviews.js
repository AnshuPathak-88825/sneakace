import dbConnect from "../../../dbConnect/db";
import ProductReview from "../../../model/ProductReview";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();

      const { product_id } = req.query;

      var productReviews = await ProductReview.findOne({ product_id });

      if (!productReviews) {
        productReviews = await ProductReview.create({
          product_id,
          reviews: [],
        });
      }

      res.status(200).json({ success: true, data: productReviews.reviews });
    } catch (error) {
      console.error("Error getting product reviews:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
