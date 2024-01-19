import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

const checkOut = () => {
  const [cart, setCart] = useState({});
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderItems, setOrderItems] = useState([]);
  const { user } = UserAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postcodeZIP, setPostcodeZIP] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        // console.log(user);
        const user_id = user.email.split("@")[0];
        // console.log(user_id);

        try {
          const response = await axios.post("/api/cart/getCart", { user_id });
          console.log(response.data);
          setCart(response.data.data);
        } catch (error) {
          console.error("Error fetching cart:", error.message);
        }
      }
    };

    fetchCart();
  }, [user]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        let updatedProductList = [];
        let updatedOrderItems = [];

        for (const cartItem of cart.products) {
          const { product, variationId, quantity } = cartItem;

          const productResponse = await axios.get(
            `/api/product/getProductById?id=${product}`
          );
          const productDetails = productResponse.data.data;

          const variationDetails = productDetails.variations.find(
            (variation) => variation._id === variationId
          );

          updatedProductList.push({
            product: productDetails,
            variation: variationDetails,
            quantity: quantity,
          });

          const orderProduct = {
            productName: productDetails.productName,
            productId: productDetails._id,
            variationId: variationId,
            quantity: quantity,
            price: productDetails.productPrice,
            discount: 0,
            productImage:
              (variationDetails.productImage &&
                variationDetails.productImage[0]) ||
              "",
          };

          updatedOrderItems.push(orderProduct);
        }

        setProductList(updatedProductList);
        setOrderItems(updatedOrderItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error.message);
      }
    };

    if (cart.products) {
      fetchProductList();
    }
  }, [cart]);

  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      console.log("Razorpay SDK Failed to load");
      return;
    }

    try {
      // Make API call to the serverless API
      const data = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taxAmt: productList.reduce(
            (acc, item) => acc + item.product.productPrice * item.quantity,
            0
          ),
        }),
      }).then((t) => t.json());

      var options = {
        key: process.env.RAZORPAY_KEY,
        name: user.displayName,
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your Transaction",
        handler: async function (response) {
          try {
            // Validate payment at server - using webhooks is a better idea.
            await createOrder();

            // Additional logic for success
            alert("Order created successfully!");
          } catch (error) {
            // Handle error in creating order
            console.error("Error creating order:", error);
            alert("Error creating order. Please try again.");
          }
        },
        prefill: {
          name: user.displayName,
          email: user.email,
          contact: "8076794410",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      // Handle any other errors
      console.error("Error in Razorpay payment:", error);
      alert("Error in Razorpay payment. Please try again.");
    }
  };

  // function to generate a order id
  function generateOrderId() {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8); // Random characters

    const orderId = `ORDER-${timestamp}-${randomString}`;
    return orderId;
  }

  // Function to create an order
  const createOrder = async () => {
    try {
      const response = await axios.post("/api/order/createOrder", {
        // Add order data here based on your requirements

        orderID: generateOrderId(),
        orderDate: Date.now,
        companyName: companyName,
        comment: orderNotes,
        billingCustomerName: `${firstName} ${lastName}`,
        billingLastName: lastName,
        billingAddress: address,
        billingAddress2: address2,
        billingCity: city,
        billingPincode: postcodeZIP,
        billingState: state,
        billingCountry: country,
        billingEmail: email,
        billingPhone: phone,
        orderItems: orderItems,
        paymentMethod: "cod",

        subTotal: 768,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div className="bg-white w-full py-36 px-1 sm:px-4 md:px-16">
      <div className="w-full flex flex-col gap-8 xl:flex-row ">
        <div className="w-full  xl:w-3/5 h-fit">
          <div className="w-full p-12 flex flex-col gap-12 items-start justify-center ">
            <div className="text-3xl text-black font-bold">Billing Details</div>

            <div className="flex flex-col gap-6 w-full ">
              <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">First Name</div>
                  <div className="w-full border-2 border-slate-200 shadow outline-none ">
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 outline-none "
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">Last Name</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 outline-none "
                    ></input>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start justify-center w-full ">
                <div className="text-xl text-black">Company Name</div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    type="text"
                    className=" w-full px-8 text-black text-xl py-4 outline-none "
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full ">
                <div className="text-xl text-black">Country</div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <select
                    placeholder="Select the Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border-1 border-slate-200 outline-none  bg-white px-8 appearance-none text-slate-400 text-xl py-4 "
                  >
                    <option>Select the Country</option>
                    <option>INDIA</option>
                    <option>CHINA</option>
                    <option>NEPAL</option>
                    <option>BANGLADESH</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start justify-center w-full ">
                <div className="text-xl text-black">Street Address</div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="House number and street name"
                    className="  w-full px-8 text-black text-xl py-4 outline-none "
                  ></input>
                </div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <input
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    type="text"
                    placeholder="Apartment, suite, unit etc."
                    className="w-full px-8 text-black text-xl py-4 outline-none "
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full ">
                <div className="text-xl text-black">City</div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="w-full px-8 text-black text-xl py-4 outline-none "
                  ></input>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">State</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className=" w-full px-8 text-black text-xl py-4 outline-none "
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">Postcode / ZIP</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      value={postcodeZIP}
                      onChange={(e) => setPostcodeZIP(e.target.value)}
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 outline-none "
                    ></input>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">Phone</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className=" w-full px-8 text-black text-xl py-4 outline-none "
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">Email Address</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=" w-full px-8 text-black text-xl py-4 outline-none "
                    ></input>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-2xl text-black ">
                  Additional information
                </div>
                <div className="text-lg text-black ">Order notes</div>
                <div className="w-full ">
                  <textarea
                    value={orderNotes}
                    onChange={(e) => {
                      setOrderNotes(e.target.value);
                    }}
                    className="w-full h-[150px] text-black border-2 border-slate-200 shadow p-6 outline-none "
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-2/5 h-fit">
          <div className="w-full p-12 flex flex-col gap-12 items-start justify-center">
            <div className="text-3xl text-black font-bold ">Your order</div>
            <div className="flex flex-col bg-slate-200 gap-6 w-full px-12 py-16 ">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <div className="w-full pb-6 text-2xl font-bold text-black flex flex-row items-center justify-between border-b-2 border-slate-400">
                    <div>Product</div>
                    <div>Total</div>
                  </div>

                  {productList.map((item, index) => (
                    <div
                      key={index}
                      className="w-full pb-6 text-xl text-black flex flex-row items-center justify-between border-b-2 border-slate-400"
                    >
                      <div>{item.product.productName}</div>
                      <div>€{item.product.productPrice * item.quantity}</div>
                    </div>
                  ))}

                  <div className="w-full pb-6 text-xl text-black flex flex-row items-center justify-between border-b-2 border-slate-400">
                    <div>Shipping</div>
                    <div>Free shipping</div>
                  </div>

                  <div className="w-full pb-6 text-2xl font-bold text-black flex flex-row items-center justify-between border-b-2 border-slate-400">
                    <div>Total</div>
                    <div className="text-3xl text-cyan-400">
                      €
                      {productList.reduce(
                        (acc, item) =>
                          acc + item.product.productPrice * item.quantity,
                        0
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="w-full ">
              <button
                onClick={() => {
                  makePayment();
                }}
                className="w-full bg-cyan-400 py-4 rounded-full text-2xl "
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkOut;
