import dbConnect from "../../../dbConnect/db";
import ProductReview from "../../../model/ProductReview";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { product_id, user_id, rating, comment, verifiedPurchase } =
        req.body;

      const productReview = await ProductReview.findOne({ product_id });

      if (!productReview) {
        await ProductReview.create({
          product_id,
          reviews: [{ user_id, rating, comment, verifiedPurchase }],
        });
      } else {
        const existingReviewIndex = productReview.reviews.findIndex(
          (review) => review.user_id === user_id
        );

        if (existingReviewIndex !== -1) {
          productReview.reviews[existingReviewIndex] = {
            user_id,
            rating,
            comment,
            verifiedPurchase,
          };
        } else {
          productReview.reviews.push({
            user_id,
            rating,
            comment,
            verifiedPurchase,
          });
        }

        await productReview.save();
      }

      res.status(200).json({
        success: true,
        message: "Product review added or updated successfully",
        data: productReview,
      });
    } catch (error) {
      console.error("Error adding product review:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
