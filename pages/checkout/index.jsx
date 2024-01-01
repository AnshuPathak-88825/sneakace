import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

const checkOut = () => {
  const [cart, setCart] = useState({});
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();

  useEffect(() => {
    console.log("hello");
    const fetchCart = async () => {
      if (user) {
        const user_id = user.email.split("@")[0];
        console.log(user_id);

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
        }

        setProductList(updatedProductList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error.message);
      }
    };

    if (cart.products) {
      fetchProductList();
    }
  }, [cart]);

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
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 "
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">Last Name</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 "
                    ></input>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start justify-center w-full ">
                <div className="text-xl text-black">Company Name</div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <input
                    type="text"
                    className=" w-full px-8 text-black text-xl py-4 "
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full ">
                <div className="text-xl text-black">Country</div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <select
                    placeholder="Select the Country"
                    className="w-full border-1 border-slate-200 bg-white px-8 appearance-none text-slate-400 text-xl py-4 "
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
                    type="text"
                    placeholder="House number and street name"
                    className="  w-full px-8 text-black text-xl py-4 "
                  ></input>
                </div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit etc."
                    className="w-full px-8 text-black text-xl py-4 "
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full ">
                <div className="text-xl text-black">Town/City</div>
                <div className="w-full border-2 border-slate-200 shadow">
                  <input
                    type="text"
                    className="w-full px-8 text-black text-xl py-4 "
                  ></input>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">State / County</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 "
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">Postcode / ZIP</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 "
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
                      className=" w-full px-8 text-black text-xl py-4 "
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-full nd:w-1/2">
                  <div className="text-xl text-black">Email Address</div>
                  <div className="w-full border-2 border-slate-200 shadow">
                    <input
                      type="text"
                      className=" w-full px-8 text-black text-xl py-4 "
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
                    className="w-full h-[150px] border-2 border-slate-200 shadow p-6"
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
              <button className="w-full bg-cyan-400 py-4 rounded-full text-2xl ">
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
