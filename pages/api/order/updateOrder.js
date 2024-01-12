// pages/api/orders/updateOrder.js
import Order from "../../../model/Order";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const orderId = req.body.orderId;

  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { orderID: orderId },
      req.body.updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
