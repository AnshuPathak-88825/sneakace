// pages/api/orders/cancelOrder.js
import Order from "../../../model/Order";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).end(); // Method Not Allowed
  }

  const orderId = req.query.orderId;

  try {
    const canceledOrder = await Order.findByIdAndDelete(orderId);

    if (!canceledOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ message: "Order canceled successfully" });
  } catch (error) {
    console.error("Error canceling order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
