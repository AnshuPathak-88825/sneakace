import { Link } from "react-router-dom";
import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai"; // This is the dustbin icon

import img from "../../public/assets/images/shoe2.jpg";
const Cart = () => {
  const iconStyle = {
    cursor: "pointer",
    color: "black",
  };
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
          {[1, 2, 3, 4, 5, 6].map((index) => {
            return (
              <div
                key={index}
                className=" border-2 flex flex-row mt-6 bg-white w-full"
              >
                <div className="w-1/6 flex p-4 justify-center  ">
                  <Image
                    src={img}
                    alt={"Not found"}
                    className="w-full rounded-2xl  inline-block  cursor-pointer "
                  />
                </div>
                <div className="w-1/3 flex p-4 items-center justify-center ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                  veritatis fuga labore officiis! Corporis distinctio
                  repellendus asperiores.
                </div>
                <div className="w-1/6 flex p-4 items-center justify-center">
                  €3.10
                </div>
                <div className="w-1/3 flex py-4 justify-center items-center ">
                  <div className="w-auto flex items-center p-2 rounded-[5px] ">
                    <button className=" w-12 h-12 bg-slate-300  border-2 border-black text-3xl rounded-[5px] ">
                      -
                    </button>
                    <input
                      className=" w-2/5 border-2 m-3 h-12 border-black rounded-[5px]"
                      type="text"
                      value={1}
                      readOnly
                      style={{ textAlign: "center", fontSize: "25px" }}
                    />
                    <button className="w-12 h-12 bg-slate-300  border-2 border-black text-2xl rounded-[5px]">
                      +
                    </button>
                  </div>
                </div>
                <div className="w-1/6 flex p-4 items-center justify-center">
                  $100
                </div>
                <div className="w-1/6 flex p-4 items-center justify-center">
                  <AiOutlineDelete size={40} style={iconStyle} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white text-black h-auto mt-0">
        <div className="flex justify-between py-5 px-12 lg:px-24 bg-white">
          <div className="w-auto border-2 rounded-[50px] bg-slate-300">
            <button className="text-xl lg:text-2xl  px-12 lg:px-20 py-5">Continue Shopping</button>
          </div>
          <div className="w-auto border-2 rounded-[50px] bg-slate-300">
            <button className="text-xl lg:text-2xl  px-12 lg:px-20 py-5">Clear Shopping Cart</button>
          </div>
        </div>

        <div className="w-full my-24 lg:px-24  flex justify-center">
          <div className="px-12 py-12 bg-white w-full flex lg:flex-row flex-col  justify-between gap-10">


            <div className=" w-full lg:w-1/3 flex flex-col h-fit bg-slate-100  gap-7  p-8 rounded-xl shadow-xl">
                <div className="w-full flex justify-center text-2xl font-bold mb-4">
                  Estimate Shipping And Tax
                </div>
                  <div  className="text-xl ">Enter your destination to get a shipping estimate.</div>
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
                <button className="w-full bg-cyan-400 py-4 rounded-full text-2xl ">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
