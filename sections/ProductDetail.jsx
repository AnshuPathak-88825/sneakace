import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import bg from "../public/assets/images/shoe.jpg";
import Image from "next/image";

const ProductDetail = ({ProductVisible,setProductVisible}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("W"); // Corrected default color
  const [selectedPattern, setSelectedPattern] = useState("W"); // Corrected default pattern

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handlePatternChange = (pattern) => {
    setSelectedPattern(pattern);
  };

  const addToCart = () => {
    console.log(
      `Added ${quantity} items of size ${selectedSize}, color ${selectedColor}, pattern ${selectedPattern} to the cart`
    );
  };

  return (
    <div className="fixed top-0 z-[1000] left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="border  w-3/4  mx-auto bg-white p-0 m-0">
        <div className="flex justify-end m-4">
          <button
            className="text-gray-700 text-xl p-0 m-0"
            onClick={() => setProductVisible(!ProductVisible)}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="border border-grey-300 border-solid border"></div>

        <div className="flex-1">
          <div className="max-w-full mx-auto flex flex-col lg:flex-row p-4 lg:p-8 bg-white rounded-lg">
            <div className="lg:w-1/2 flex-1 p-5">
              <Image
                src={bg}
                alt="bg-image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="lg:w-1/2 flex-1 pl-0   p-5">
              <h2 className="text-lg lg:text-2xl text-yellow-500 font-bold mb-4">
                Product Name
              </h2>
              <div className="flex items-center mb-4 ">
                <span className="text-gray-700 mr-2">Price:</span>
                <span className="text-lg lg:text-xl font-bold text-yellow-500">
                  $99.99
                </span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="text-sm lg:text-base text-gray-600 mb-4 whitespace-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proi
              </div>
              <div className="border border-grey-300 border-solid border m-3"></div>

              <div className="mb-4 flex flex-row justify-around flex-wrap">
                <span className="mb-4">
                  <div className="text-black mr-2 font-medium	">Colour</div>
                  <button
                    onClick={() => handleColorChange("W")}
                    className={`text-black size-btn  ${
                      selectedColor === "W" && "selected"
                    } bg-white m-1 p-2 rounded-full border-2 hover:border-black	`}
                  ></button>
                  <button
                    onClick={() => handleColorChange("B")}
                    className={`text-black size-btn ${
                      selectedColor === "B" && "selected"
                    } bg-black m-1 p-2 rounded-full border-2 hover:border-black	 `}
                  ></button>
                  <button
                    onClick={() => handleColorChange("R")}
                    className={`text-black size-btn ${
                      selectedColor === "R" && "selected"
                    } bg-red-600 m-1 p-2  rounded-full border-2 hover:border-black	 `}
                  ></button>
                </span>

                <span className="mb-4 ">
                  <div className="text-black mr-2 font-medium	">Size</div>
                  <button
                    onClick={() => handleSizeChange("S")}
                    className={`text-black size-btn ${
                      selectedSize === "S" && "selected"
                    } bg-gray-200 m-1 p-1 hover:bg-yellow-500 hover:text-white`}
                  >
                    S
                  </button>
                  <button
                    onClick={() => handleSizeChange("M")}
                    className={`text-black size-btn ${
                      selectedSize === "M" && "selected"
                    } bg-gray-200 m-1 p-1 hover:bg-yellow-500 hover:text-white`}
                  >
                    M
                  </button>
                  <button
                    onClick={() => handleSizeChange("L")}
                    className={`text-black size-btn ${
                      selectedSize === "L" && "selected"
                    } bg-gray-200 m-1 p-1 hover:bg-yellow-500 hover:text-white`}
                  >
                    L
                  </button>
                </span>
                <span className="mb-4 ">
                  <div className="text-black mr-2 font-medium	">Pattern</div>
                  <button
                    onClick={() => handlePatternChange("W")}
                    className={`text-black size-btn ${
                      selectedPattern === "W" && "selected"
                    } bg-gray-200 m-1 p-1 hover:bg-yellow-500 hover:text-white`}
                  >
                    WAXY
                  </button>
                  <button
                    onClick={() => handlePatternChange("C")}
                    className={`text-black size-btn ${
                      selectedPattern === "C" && "selected"
                    }  bg-gray-200 m-1 p-1 hover:bg-yellow-500 hover:text-white`}
                  >
                    CURVY{" "}
                  </button>
                  <button
                    onClick={() => handlePatternChange("S")}
                    className={`text-black size-btn ${
                      selectedPattern === "S" && "selected"
                    } bg-gray-200  m-1 p-1 hover:bg-yellow-500 hover:text-white`}
                  >
                    SHINNY
                  </button>
                </span>
              </div>

              <div className="flex items-center mb-4 justify-center justify-around flex-wrap">
                <span className="text-gray-700 border py-2 m-2">
                  <button
                    onClick={decrementQuantity}
                    className=" px-2 lg:px-3 py-1 m-1"
                  >
                    -
                  </button>
                  <span className="text-gray-500 m-1">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className=" px-2 lg:px-3 py-1 m-1"
                  >
                    +
                  </button>
                </span>

                <button
                  onClick={addToCart}
                  className=" bg-yellow-500 text-white m-2 px-8 lg:px-6 py-4  hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
                >
                  Add to Cart
                </button>
                <div className="text-gray-700 text-xl p-0 m-3 cursor-pointer">
                  <IoMdHeartEmpty />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
