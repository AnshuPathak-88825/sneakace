import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai"; // This is the dustbin icon

import img from "../../public/assets/images/shoe2.jpg";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

const Cart = () => {
  const iconStyle = {
    cursor: "pointer",
    color: "black",
  };

  const [cart, setCart] = useState(null);
  const [productList, setProductList] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const user_id = user.email.split("@")[0];

        try {
          const response = await axios.post("/api/cart/getCart", {
            user_id,
          });

          if (response.status === 200) {
            setCart(response.data.data);
          } else {
            console.error("Error fetching cart:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching cart:", error.message);
        }
      }
    };

    fetchCart();
  }, [user]);

  useEffect(() => {
    const fetchProductList = async () => {
      if (cart) {
        try {
          let updatedProductList = [];

          for (const cartItem of cart.products) {
            const { product, variationId, quantity } = cartItem;

            const productResponse = await axios.get(
              `/api/product/getProductById?id=${product}`
            );
            const productDetails = productResponse.data.data;

            const variationDetails = productDetails.variations.find(
              (variation) => variation.variationId === variationId
            );

            updatedProductList.push({
              product: productDetails,
              variation: variationDetails,
              quantity: quantity,
            });
          }
          console.log(updatedProductList);
          setProductList(updatedProductList);
        } catch (error) {
          console.error("Error fetching product details:", error.message);
        }
      }
    };

    fetchProductList();
  }, [cart]);

  async function deleteProductFromCart(product_id) {
    try {
      const user_id = user.email.split("@")[0];

      const response = await axios.delete("/api/cart/deleteProduct", {
        data: { user_id, product_id, variationId },
      });

      if (response.status === 200 && response.data.success) {
        console.log("Product deleted from cart:", response.data.data);
        return true;
      } else {
        console.error("Error deleting product from cart:", response.data.error);
        return false;
      }
    } catch (error) {
      console.error("Error deleting product from cart:", error.message);
      return false;
    }
  }

  return (
    <>
      <div className="text-black bg-white w-full h-auto mt-24 lg:px-24  flex justify-center">
        <div className="px-12 py-12 bg-white w-full flex flex-col">
          <div className="text-3xl text-white">Your Added items</div>
          <div className="flex flex-row mt-6 w-full bg-slate-200	 ">
            <div className="w-1/6 flex py-4 justify-center  ">IMAGE</div>
            <div className="w-1/3 flex py-4 justify-center ">PRODUCT NAME</div>
            <div className="w-1/6 flex py-4 justify-center ">UNIT PRICE</div>
            <div className="w-1/3 flex py-4 justify-center ">QTY</div>

            <div className="w-1/6 flex py-4 justify-center ">SUBTOTAL</div>
            <div className="w-1/6 flex py-4 justify-center ">ACTION</div>
          </div>
          {productList.map((productEntry, index) => (
            <div
              key={index}
              className="border-2 flex flex-row mt-6 bg-white w-full"
            >
              {productEntry.product.variations[0] && (
                <div className="w-1/6 flex p-4 justify-center">
                  <Image
                    height={100}
                    width={100}
                    src={productEntry.variation.productImage[0]}
                    alt={productEntry.product.productName} // Update with the actual product name
                    className="w-full rounded-2xl inline-block cursor-pointer"
                  />
                </div>
              )}
              <div className="w-1/3 flex p-4 items-center justify-center">
                {productEntry.product.productName}{" "}
              </div>
              <div className="w-1/6 flex p-4 items-center justify-center">
                {productEntry.product.productPrice}{" "}
              </div>
              <div className="w-1/3 flex py-4 justify-center items-center">
                <div className="w-auto flex items-center p-2 rounded-[5px]">
                  <button className="w-12 h-12 bg-slate-300 border-2 border-black text-3xl rounded-[5px]">
                    -
                  </button>
                  <input
                    className="w-2/5 border-2 m-3 h-12 border-black rounded-[5px]"
                    type="text"
                    value={productEntry.quantity}
                    readOnly
                    style={{ textAlign: "center", fontSize: "25px" }}
                  />
                  <button className="w-12 h-12 bg-slate-300 border-2 border-black text-2xl rounded-[5px]">
                    +
                  </button>
                </div>
              </div>
              <div className="w-1/6 flex p-4 items-center justify-center">
                {/* Calculate and display subtotal based on product price and quantity */}
                ${productEntry.product.productPrice * productEntry.quantity}
              </div>
              <div className="w-1/6 flex p-4 items-center justify-center">
                <AiOutlineDelete
                  onClick={() => {
                    deleteProductFromCart(productEntry.product._id);
                  }}
                  size={40}
                  style={iconStyle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white text-black h-auto mt-0">
        <div className="flex justify-between py-5 px-12 lg:px-24 bg-white">
          <div className="w-auto border-2 rounded-[50px] bg-slate-300">
            <button className="text-xl lg:text-2xl  px-12 lg:px-20 py-5">
              Continue Shopping
            </button>
          </div>
          <div className="w-auto border-2 rounded-[50px] bg-slate-300">
            <button className="text-xl lg:text-2xl  px-12 lg:px-20 py-5">
              Clear Shopping Cart
            </button>
          </div>
        </div>

        <div className="w-full my-24 lg:px-24  flex justify-center">
          <div className="px-12 py-12 bg-white w-full flex lg:flex-row flex-col  justify-between gap-10">
            <div className=" w-full lg:w-1/3 flex flex-col h-fit bg-slate-100  gap-7  p-8 rounded-xl shadow-xl">
              <div className="w-full flex justify-center text-2xl font-bold mb-4">
                Estimate Shipping And Tax
              </div>
              <div className="text-xl ">
                Enter your destination to get a shipping estimate.
              </div>
              <div className="flex flex-col gap-2 text-xl ">
                <div>* Country</div>
                <div>
                  <select className="w-full px-4 py-3 border-2  bg-white border-slate-100">
                    <option>Bangladesh</option>
                    <option>Albania</option>
                    <option>Åland Islands</option>
                    <option>Afghanistan</option>
                    <option>Belgium</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-xl ">
                <div>* Region / State</div>
                <div>
                  <select className="decoration-none w-full px-4 py-3 border-2 bg-white border-slate-100">
                    <option>Bangladesh</option>
                    <option>Albania</option>
                    <option>Åland Islands</option>
                    <option>Afghanistan</option>
                    <option>Belgium</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-xl ">
                <div>* Zip/Postal Code</div>
                <div>
                  <input
                    className="w-full px-4 py-2 border-2 border-slate-200"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <button
                  className="w-fit bg-cyan-400 px-16 py-4 rounded-full text-2xl"
                  type="submit"
                >
                  Get A Quote
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/3 h-fit flex flex-col  gap-7 bg-slate-100  p-8 rounded-xl shadow-xl">
              <div className="w-full flex justify-center text-2xl font-bold mb-4">
                Use Coupon Code
              </div>

              <div className="text-xl  ">
                Enter your coupon code if you have one.
              </div>
              <div className="">
                <input
                  className="w-full px-4 py-2 border-2 border-slate-200"
                  type="text"
                  required
                  name="name"
                />
              </div>
              <div className="w-full ">
                <button
                  className="w-fit bg-cyan-400 px-16 py-4 rounded-full text-2xl"
                  type="submit"
                >
                  Apply Coupon
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/3 h-fit flex flex-col gap-7 bg-slate-100  p-8 rounded-xl shadow-xl">
              <div className="w-full flex justify-center text-2xl font-bold ">
                Cart Total
              </div>
              <div className="flex flex-row justify-between items-center w-full text-xl">
                <div>Total products</div>
                <div>$400</div>
              </div>
              <div className="flex flex-row justify-between items-center w-full text-2xl ">
                <div>Grand Total</div>
                <div>$400</div>
              </div>
              <div>
                <Link href="/checkout">
                  <button className="w-full bg-cyan-400 py-4 rounded-full text-2xl ">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
