// function to view all Shiprocket orders
import axios from "axios";

const viewAllShiprocketOrders = async (token) => {
  const url = "https://apiv2.shiprocket.in/v1/external/orders";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Fetching orders failed:", error.message);
    throw error;
  }
};

export default viewAllShiprocketOrders;
