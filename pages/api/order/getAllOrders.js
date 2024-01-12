// pages/api/orders/getAllOrders.js
import Order from "../../../model/Order";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const allOrders = await Order.find();
    console.log(allOrders);
    res.status(200).json(allOrders);
  } catch (error) {
    console.error("Error getting all orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
