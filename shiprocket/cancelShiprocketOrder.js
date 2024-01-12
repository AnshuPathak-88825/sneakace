// function to cancel Shiprocket order
import axios from "axios";

const cancelShiprocketOrder = async (token, orderIds) => {
  const url = "https://apiv2.shiprocket.in/v1/external/orders/cancel";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const requestBody = {
    ids: orderIds,
  };

  try {
    const response = await axios.post(url, requestBody, { headers });
    return response.data;
  } catch (error) {
    console.error("Order cancellation failed:", error.message);
    throw error;
  }
};

export default cancelShiprocketOrder;
