import React, { useState, useTransition } from "react";
import ProductCarasoulDetails from "../../components/ProductCarasoulDetails";
import TransitionEffect from "../../components/TransitionEffect";
import Wrapper from "../../components/Wrapper";
import { FaStar } from "react-icons/fa";
import ColorButtons from "../../components/ColorButtons";
import { AiOutlineCopy } from "react-icons/ai";
import TabButton from "../../components/TabButton";
import { RxCross2 } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
const ProductDetails = () => {
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

  const [tab, setTab] = useState("Additional Information");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const Product_Tab_Data = [
    {
      title: "Additional Information",
      id: "Additional Information",
      content: (
        <div className="flex flex-col items-center lg:items-start mt-10 gap-5">
          <div className="flex items-center gap-10">
            <p className="text-lg">Weight</p>
            <p className="text-lg">400g</p>
          </div>

          <div className="flex items-center gap-10">
            <p className="text-lg">Dimensions</p>
            <p className="text-lg">10 x 10 x 15 cm</p>
          </div>

          <div className="flex items-center gap-10">
            <p className="text-lg">Materials</p>
            <p className="text-lg">160% cotton, 40% polyester</p>
          </div>
        </div>
      ),
    },

    {
      title: "Description",
      id: "Description",
      content: (
        <div className="flex items-center justify-center mt-10 text-center">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim
            eum vel aliquam voluptates ut doloribus, reiciendis laborum soluta,
            inventore voluptatum ad laboriosam tenetur fugit porro sed
            praesentium nam a!
          </p>
        </div>
      ),
    },

    {
      title: "Reviews",
      id: "Reviews",
      content: (
        <div className="flex items-center justify-center mt-10 text-center">
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            voluptatibus reprehenderit, nihil laudantium nemo saepe alias itaque
            deserunt? Quasi tenetur quibusdam dolorum dolores. Earum nostrum
            pariatur, impedit repellat ipsam beatae aliquam! Placeat tenetur
            reprehenderit quam vel corrupti labore facere illum maiores nemo
            consectetur expedita, accusamus aperiam voluptatem, pariatur eius
            ratione?
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full md:py-20 bg-white">
      <TransitionEffect />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCarasoulDetails />
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
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

              <span className="mb-4">
                <div className="text-black mr-2 font-medium">Size</div>
                <button
                  onClick={() => handleSizeChange("S")}
                  className={`text-black size-btn ${
                    selectedSize === "S" ? "bg-yellow-500 text-white" : "bg-gray-200 hover:bg-yellow-500 hover:text-white"
                  }  m-1 p-1 transition-all duration-300 ease-in-out`}
                >
                  S
                </button>
                <button
                  onClick={() => handleSizeChange("M")}
                  className={`text-black size-btn ${
                    selectedSize === "M" ? "bg-yellow-500 text-white" : "bg-gray-200 hover:bg-yellow-500 hover:text-white"
                  }  m-1 p-1 transition-all duration-300 ease-in-out`}
                >
                  M
                </button>
                <button
                  onClick={() => handleSizeChange("L")}
                  className={`text-black size-btn ${
                    selectedSize === "L" ? "bg-yellow-500 text-white" : "bg-gray-200 hover:bg-yellow-500 hover:text-white"
                  }  m-1 p-1 transition-all duration-300 ease-in-out`}
                >
                  L
                </button>
              </span>

              <span className="mb-4 ">
                <div className="text-black mr-2 font-medium	">Pattern</div>
                <button
                  onClick={() => handlePatternChange("W")}
                  className={`text-black size-btn  bg-gray-200  m-1 p-1 ${
                    selectedPattern === "W"
                      ? "bg-yellow-500 hover:bg-yellow-500 text-white"
                      : "hover:bg-yellow-500 hover:text-white"
                  } transition-all duration-500 ease-in-out`}
                >
                  WAXY
                </button>
                <button
                  onClick={() => handlePatternChange("C")}
                  className={`text-black size-btn  bg-gray-200  m-1 p-1 ${
                    selectedPattern === "C"
                      ? "bg-yellow-500 hover:bg-yellow-500 text-white"
                      : "hover:bg-yellow-500 hover:text-white"
                  } transition-all duration-300 ease-in-out`}
                >
                  CURVY
                </button>
                <button
                  onClick={() => handlePatternChange("S")}
                  className={`text-black size-btn  bg-gray-200 m-1 p-1 ${
                    selectedPattern === "S"
                      ? "bg-yellow-500 hover:bg-yellow-500 text-white"
                      : "hover:bg-yellow-500 hover:text-white"
                  } transition-all duration-300 ease-in-out`}
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

        <div className="flex items-center justify-center gap-5 mt-5">
          <TabButton
            selectTab={() => handleTabChange("Additional Information")}
            active={tab === "Additional Information"}
          >
            Additional Information
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Description")}
            active={tab === "Description"}
          >
            Description
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Reviews")}
            active={tab === "Reviews"}
          >
            Reviews
          </TabButton>
        </div>

        <div>{Product_Tab_Data.find((t) => t.id === tab).content}</div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
