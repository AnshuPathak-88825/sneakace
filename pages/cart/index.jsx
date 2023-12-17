// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Wrapper from "../../components/Wrapper";
// import CartItem from "../../components/CartItem";
// const Cart = () => {
//   return (
//     <div className="w-full md:py-20">
//       <Wrapper>
//         <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
//           <div className="text-3xl md:text-4xl mb-5 font-semibold leading-tight">
//             Shopping Cart
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 py-10">
//           {/* Cart Items */}
//           <div className="flex-[2]">
//             <div className="text-xl font-bold">Cart Items</div>
//             <CartItem />
//             <CartItem />
//             <CartItem />
//           </div>
//           {/* Cart Summary */}
//           <div className="flex-[1]">
//             <div className="text-xl font-bold">Summary</div>
//             <div className="p-5 my-5 bg-primary/[0.05] rounded-xl">
//               <div className="flex justify-between">
//                 <div className="uppercase text-md md:text-lg font-medium text-primary">
//                   Subtotal
//                 </div>
//                 <div className="text-md md:text-lg font-medium text-primary">
//                   $ 200
//                 </div>
//               </div>

//               <div className="text-sm md:text-md py-5 border-t border-t-primary/60 mt-5">
//                 The Subtotal reflects the total price of your order, including
//                 duties and taxes, before any applicable discounts. It does not
//                 include delivery costs and international transaction fees.
//               </div>
//             </div>

//             <button className="w-full py-4 rounded-full bg-primary text-background text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Checkout</button>
//           </div>
//         </div>
//       </Wrapper>
//     </div>
//   );
// };

// export default Cart;

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
      <div className="text-black bg-white w-full h-auto my-24 lg:px-48  flex justify-center">
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
              <div key={index} className=" border-2 flex flex-row mt-6 bg-white w-full">
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
                    <button className=" w-[50px] h-[40px] bg-slate-300  border-2 border-black text-3xl rounded-[5px] ">
                      -
                    </button>
                    <input
                      className=" w-2/5 border-2 m-3 h-10 border-black rounded-[5px]"
                      type="text"
                      value={1}
                      readOnly
                      style={{ textAlign: "center", fontSize: "25px" }}
                    />
                    <button className="w-[50px] h-[40px] bg-slate-300  border-2 border-black text-2xl rounded-[5px]">
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

      <div className="bg-white text-black h-auto">
        <div className="flex justify-between justify-around m-10 bg-white">
          <div className="w-auto border-2 rounded-[50px] bg-slate-300">
            <button className="text-4xl  px-20 py-5">Continue Shopping</button>
          </div>
          <div className="w-auto border-2 rounded-[50px] bg-slate-300">
            <button className="text-4xl px-20 py-5">Clear Shopping Cart</button>
          </div>
        </div>


        <div className="w-full h-auto my-24 lg:px-48  flex justify-center">
        <div className="px-12 py-12 bg-white w-full flex flex-row  justify-around">
          <div className="w-1/3">
            <div className="cart-tax">
              <div className="title-wrap">
                <h4 className="cart-bottom-title section-bg-gray">
                  Estimate Shipping And Tax
                </h4>
              </div>
              <div className="tax-wrapper">
                <p>Enter your destination to get a shipping estimate.</p>
                <div className="tax-select-wrapper">
                  <div className="tax-select">
                    <label>* Country</label>
                    <select className="email s-email s-wid">
                      <option>Bangladesh</option>
                      <option>Albania</option>
                      <option>Åland Islands</option>
                      <option>Afghanistan</option>
                      <option>Belgium</option>
                    </select>
                  </div>
                  <div className="tax-select">
                    <label>* Region / State</label>
                    <select className="email s-email s-wid">
                      <option>Bangladesh</option>
                      <option>Albania</option>
                      <option>Åland Islands</option>
                      <option>Afghanistan</option>
                      <option>Belgium</option>
                    </select>
                  </div>
                  <div className="tax-select">
                    <label>* Zip/Postal Code</label>
                    <input type="text" />
                  </div>
                  <button className="cart-btn-2" type="submit">
                    Get A Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="discount-code-wrapper">
              <div className="title-wrap">
                <h4 className="cart-bottom-title section-bg-gray">
                  Use Coupon Code
                </h4>
              </div>
              <div className="discount-code">
                <p>Enter your coupon code if you have one.</p>
                <form>
                  <input type="text" required name="name" />
                  <button className="cart-btn-2" type="submit">
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <div className="grand-totall">
              <div className="title-wrap">
                <h4 className="cart-bottom-title section-bg-gary-cart">
                  Cart Total
                </h4>
              </div>
              <h5>
                Total products <span>$400</span>
              </h5>

              <h4 className="grand-totall-title">
                Grand Total <span>$400</span>
              </h4>
              {/* <Link href="/wishlist">
                        Proceed to Checkout
                      </Link> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
