import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const OrdersLists = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/order/getAllOrders");
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const downloadPdf = (orderId) => {
    console.log(`Download PDF for Order ID: ${orderId}`);
    // Add your logic for downloading PDF here based on the orderId
    // You can use a library like jsPDF or any other PDF generation library
  };

  const handleShipNow = async (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.orderID === orderId
        ? { ...order, orderStatus: "processing" }
        : order
    );
    setOrders(updatedOrders);

    try {
      await axios.post(`/api/order/updateOrder`, {
        orderId: orderId,
        updatedData: {
          orderStatus: "processing",
        },
      });
    } catch (error) {
      console.error("Error updating order status:", error.message);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 px-8 py-4">
      <div className="font-bold text-4xl mb-4">Orders</div>

      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[#008080] text-white">
              <th className="w-1/12 py-2">Order ID</th>
              <th className="w-1/12 py-2">TIME</th>
              <th className="w-3/12 py-2">SHIPPING ADDRESS</th>
              <th className="w-1/12 py-2">PHONE</th>
              <th className="w-1/12 py-2">AMOUNT</th>
              <th className="w-2/12 py-2">
                <span className="lg:hidden">P. Status</span>
                <span className="hidden lg:inline">Payment Status</span>
              </th>
              <th className="w-2/12 py-2">
                <span className="lg:hidden">D. Status</span>
                <span className="hidden lg:inline">Delivery Status</span>
              </th>
              <th className="w-1/12 py-2">ACTION</th>
              <th className="w-1/12 py-2">VIEW ORDER</th>
            </tr>
          </thead>
          <tbody className="text-sm bg-[#f8f9fa]">
            {loading ? (
              <tr>
                <td colSpan="9" className="py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="w-1/12 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {order.orderID}
                  </td>
                  <td className="w-1/12 py-2">
                    {new Date(order.orderDate).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="w-3/12 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {order.billingAddress}
                  </td>
                  <td className="w-1/12 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {order.billingPhone}
                  </td>
                  <td className="w-1/12 py-2">${order.subTotal}</td>
                  <td className="w-2/12 py-2">
                    <div
                      className={`w-fit py-1 px-4 bg-${
                        order.paymentStatus === "pending"
                          ? "yellow"
                          : order.paymentStatus === "processing"
                          ? "green"
                          : "blue"
                      }-100 text-${
                        order.paymentStatus === "pending"
                          ? "yellow"
                          : order.paymentStatus === "processing"
                          ? "green"
                          : "blue"
                      }-500 font-semibold rounded-full`}
                    >
                      {order.paymentStatus}
                    </div>
                  </td>
                  <td className="w-2/12 py-2">
                    <select
                      name="deliveryStatus"
                      id="deliveryStatus"
                      className="border rounded-md w-full p-1 bg-gray-200"
                      value={order.orderStatus}
                      // Add onChange handler to update delivery status
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="w-1/12 py-2 text-center">
                    {order.orderStatus === "pending" && (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full"
                        onClick={() => handleShipNow(order.orderID)}
                      >
                        Ship Now
                      </button>
                    )}
                  </td>
                  <td className="w-1/12 py-2 text-center text-xl">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() =>
                        router.push(`/admin/orders/${order.orderID}`)
                      }
                    >
                      <MdOutlineRemoveRedEye />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersLists;
