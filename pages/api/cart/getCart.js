import dbConnect from "../../../dbConnect/db";
import Cart from "../../../model/Cart";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const { user_id } = req.body;
      console.log("check id: ", user_id);

      const cart = await Cart.findOne({ user_id: user_id });
      console.log("check cart: ", cart);

      if (!cart) {
        return res
          .status(404)
          .json({ success: false, error: "Cart not found" });
      }

      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      console.error("Error fetching cart:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
