// function to generate tokenn for Shiprocket API

import axios from "axios";

const shiprocketLogin = async (email, password) => {
  const url = "https://apiv2.shiprocket.in/v1/external/auth/login";

  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Shiprocket API request failed:", error.message);
    throw error;
  }
};

export default shiprocketLogin;
