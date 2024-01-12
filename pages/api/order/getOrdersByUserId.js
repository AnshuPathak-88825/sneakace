// pages/api/orders/getOrderById.js
import Order from "../../../model/Order";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  const userId = req.query.userId;

  try {
    const orders = await Order.find({ userId });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ error: "Orders not found for the user" });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders by userId:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
