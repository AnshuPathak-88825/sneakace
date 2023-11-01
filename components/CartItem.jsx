"use client";
import Image from "next/image";
import React from "react";
import shoe from "../public/assets/images/shoe.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b border-b-primary/20">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src={shoe} width={100} height={100} alt="shoe" />
      </div>

      <div className="w-full flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Title */}
          <div className="text-2xl md:text-3xl font-semibold font-logo text-primary/80">
            Product1
          </div>

          {/* Price */}
          <div className="text-lg md:text-xl font-medium text-primary/70 font-logo">
            $200
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-lg md:text-xl font-medium text-primary/70 font-logo block md:hidden">
          Men&apos;s Shoe
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-primary text-lg md:text-lg">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-primary bg-black">
                <option value="1">S</option>
                <option value="1">M</option>
                <option value="1">L</option>
                <option value="1">XL</option>
                <option value="1">XXL</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity</div>
              <select className="hover:text-primary bg-black">
                <option value="1">S</option>
                <option value="1">M</option>
                <option value="1">L</option>
                <option value="1">XL</option>
                <option value="1">XXL</option>
              </select>
            </div>
          </div>

          <RiDeleteBin6Line className="cursor-pointer text-primary hover:text-secondary text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
