import React, { useState } from "react";
import ProductCarasoulDetails from "../../components/ProductCarasoulDetails";
import TransitionEffect from "../../components/TransitionEffect";
import Wrapper from "../../components/Wrapper";
import { FaStar } from "react-icons/fa";
import ColorButtons from "../../components/ColorButtons";
import { AiOutlineCopy } from "react-icons/ai";
const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const countIncrease = () => {
    setCount(count + 1);
  };

  const countDecrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-full md:py-20">
      <TransitionEffect />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCarasoulDetails />
          </div>

          <div className="flex-[1] py-3">
            {/* title */}
            <div className="text-[34px] font-semibold">Lorem, ipsum.</div>

            {/* Price */}
            <div className="text-lg font-semibold mb-5">$250</div>

            {/* Stars */}
            <div className="text-lg font-semibold">
              <FaStar />
            </div>

            {/* Description */}
            <div className="text-md font-medium text-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              provident corrupti unde ipsum quos maxime fuga ducimus atque culpa
              voluptatem.
            </div>

            <hr className="hidden md:block mt-5" />

            <div className="flex flex-col lg:flex-row items-center gap-[30px] mt-5">
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-lg">Color</h3>
                <div className="flex items-center gap-3">
                  <ColorButtons>White</ColorButtons>
                  <ColorButtons>Black</ColorButtons>
                  <ColorButtons>Red</ColorButtons>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <h3 className="text-lg">Pattern</h3>
                <div className="flex items-center gap-3">
                  <ColorButtons>Wavy</ColorButtons>
                  <ColorButtons>Curvy</ColorButtons>
                  <ColorButtons>Shiny</ColorButtons>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <h3 className="text-lg">Size</h3>
                <div className="flex items-center gap-3">
                  <ColorButtons>S</ColorButtons>
                  <ColorButtons>L</ColorButtons>
                  <ColorButtons>M</ColorButtons>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center mt-10 bg-slate-50 rounded-xl text-background p-2">
              <p>Redeem 10% Discount</p>
              <h3 className="text-lg border border-background p-2 flex items-center justify-between lg:w-[300px] rounded-xl">
                Sneakace10off{" "}
                <span>
                  <AiOutlineCopy />
                </span>
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3 text-background mt-5">
              <div className="flex items-center gap-5 bg-slate-50 rounded-sm p-3 text-xl">
                <button onClick={countDecrease}>-</button>
                <h3>{count}</h3>
                <button onClick={countIncrease}>+</button>
              </div>
              <div>
                <button className="p-3 bg-secondary text-background rounded-sm text-xl">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
