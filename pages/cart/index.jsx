import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import CartItem from "../../components/CartItem";
const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-3xl md:text-4xl mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* Cart Items */}
          <div className="flex-[2]">
            <div className="text-xl font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Cart Summary */}
          <div className="flex-[1]">
            <div className="text-xl font-bold">Summary</div>
            <div className="p-5 my-5 bg-primary/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-primary">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-primary">
                  $ 200
                </div>
              </div>

              <div className="text-sm md:text-md py-5 border-t border-t-primary/60 mt-5">
                The Subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </div>
            </div>

            <button className="w-full py-4 rounded-full bg-primary text-background text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Checkout</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
