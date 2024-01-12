// funtion to Track Shiprocket shipment using OrderId
import axios from "axios";

const trackShiprocketShipment = async (token, orderId) => {
  const url = `https://apiv2.shiprocket.in/v1/external/courier/track?order_id=${orderId}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Shipment tracking failed:", error.message);
    throw error;
  }
};

export default trackShiprocketShipment;
