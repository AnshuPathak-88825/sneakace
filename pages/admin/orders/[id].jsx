import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import shiprocketLogin from "../../../shiprocket/shiprocketLogin";
import createShiprocketOrder from "../../../shiprocket/createShiprocketOrder";

const OrderDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState(null);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [length, setLength] = useState();
  const [breadth, setBreadth] = useState();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `/api/order/getOrderByOrderId?orderId=${id}`
        );
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order:", error.message);
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  const handleShipNow = async () => {
    const email = "vedprakash_co20b7_37@dtu.ac.in";
    const password = "Ship@007";
    console.log(email, password);

    const response = await shiprocketLogin(email, password);
    const token = response.token;

    const orderDetails = {
      order_id: order.orderID,
      order_date: new Date(order.orderDate)
        .toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(/\//g, "-"),
      pickup_location: order.pickupLocation,
      comment: order.comment,
      company_name: order.companyName,
      billing_customer_name: order.billingCustomerName,
      billing_last_name: order.billingLastName,
      billing_address: order.billingAddress,
      billing_address_2: order.billingAddress2,
      billing_city: order.billingCity,
      billing_pincode: order.billingPincode,
      billing_state: order.billingState,
      billing_country: order.billingCountry,
      billing_email: order.billingEmail,
      billing_phone: order.billingPhone,
      shipping_is_billing: order.shippingIsBilling,
      shipping_customer_name: "",
      shipping_last_name: "",
      shipping_address: "",
      shipping_address_2: "",
      shipping_city: "",
      shipping_pincode: "",
      shipping_country: "",
      shipping_state: "",
      shipping_email: "",
      shipping_phone: "",
      order_items: order.orderItems.map((item) => ({
        name: item.productName,
        sku: item.variationId,
        units: item.quantity,
        selling_price: item.price,
        discount: item.discount,
      })),
      payment_method: order.paymentMethod,
      shipping_charges: order.shippingCharges,
      transaction_charges: order.transactionCharges,
      total_discount: order.totalDiscount,
      sub_total: order.subTotal,
      length,
      breadth,
      height,
      weight,
    };
    console.log(orderDetails);

    try {
      console.log(token);
      const response = await createShiprocketOrder(token, orderDetails);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white text-black p-8 rounded shadow-lg">
      <div className="mb-8 bg-white text-black p-8 rounded shadow-lg relative">
        {/* Order Details Section */}
        <h2 className="text-xl font-bold mb-4 text-gray-700">Order Details</h2>

        {/* Three Columns Section */}
        <div className="flex flex-col space-y-4">
          {/* First Row */}
          <div className="flex flex-row space-x-8 items-center">
            <div className="flex flex-col">
              <p className="text-base text-gray-500 mb-2">Order ID</p>
              <p className="text-lg font-semibold">{order.orderID}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-500 mb-2">Order Date</p>
              <p className="text-lg">
                {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-500 mb-2">Ship By Date</p>
              <p className="text-lg font-semibold">Not Shipped Yet</p>
            </div>
          </div>
          <hr />
          {/* Second Row */}
          <div className="flex flex-row space-x-8 items-center">
            <div className="flex flex-col">
              <p className="text-base text-gray-500 mb-2">Total Amount</p>
              <p className="text-lg font-semibold">${order.subTotal}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-500 mb-2">Payment Status</p>
              <p className="text-lg font-semibold">{order.paymentStatus}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-500 mb-2">Payment Method</p>
              <p className="text-lg font-semibold">{order.paymentMethod}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-500 mb-2">Total Items</p>
              <p className="text-lg font-semibold">{order.orderItems.length}</p>
            </div>
          </div>
        </div>
        <br />
        <hr />

        {/* Package Details Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Package Details
          </h2>
          <div className="flex flex-wrap items-center space-x-4">
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height"
              className="border p-2 rounded-md mb-2 sm:mb-0"
            />
            <input
              type="text"
              value={breadth}
              onChange={(e) => setBreadth(e.target.value)}
              placeholder="Width"
              className="border p-2 rounded-md mb-2 sm:mb-0"
            />
            <input
              type="text"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Length"
              className="border p-2 rounded-md mb-2 sm:mb-0"
            />
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              className="border p-2 rounded-md w-full sm:w-auto"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              onClick={handleShipNow}
            >
              Ship Now
            </button>
          </div>
        </div>

        <br />
        <hr />
      </div>

      {/* Product Details Section */}
      <h2 className="text-xl font-bold mb-4">Product Details</h2>
      <div className="mb-8 bg-white text-gray-800 p-8 rounded shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Item</th>
              <th className="py-2 text-center">Quantity</th>
              <th className="py-2 text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.orderItems.map((item) => (
              <tr key={item.id} className="border-b">
                {/* Item Details */}
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-12 h-12 object-cover mr-2"
                    />
                    <div>
                      <p className="text-lg font-semibold">
                        {item.productName}
                      </p>
                      <p className="text-sm">{`Product ID: ${item.productId}`}</p>
                      <p className="text-sm">{`Variation ID: ${item.variationId}`}</p>
                    </div>
                  </div>
                </td>

                {/* Quantity and Price */}
                <td className="py-4 text-center">{`${item.quantity}`}</td>
                <td className="py-4 text-center">{`$${item.price}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Shipping Details Section */}
      <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

      <div className="mb-8 bg-white text-gray-800 p-8 rounded shadow-lg">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <p className="font-semibold text-lg text-gray-700 mb-1">Name:</p>
            <p className="text-base text-gray-600">
              {order.billingCustomerName}
            </p>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg text-gray-700 mb-1">Email:</p>
            <p className="text-base text-gray-600">{order.billingEmail}</p>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg text-gray-700 mb-1">Phone:</p>
            <p className="text-base text-gray-600">{order.billingPhone}</p>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg text-gray-700 mb-1">Address:</p>
            <p className="text-base text-gray-600">
              {`${order.billingAddress}, ${order.billingCity}, ${order.billingState}, ${order.billingPincode}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
