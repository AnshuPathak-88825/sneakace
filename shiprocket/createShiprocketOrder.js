// function to create a new order in Shiprocket

import axios from "axios";

const createShiprocketOrder = async (token, orderDetails) => {
  const url = "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(url, orderDetails, { headers });
    return response.data;
  } catch (error) {
    console.error("Order creation failed:", error.message);
    throw error;
  }
};

export default createShiprocketOrder;
