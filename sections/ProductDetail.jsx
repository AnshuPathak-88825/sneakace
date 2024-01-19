import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
// import bg from "../public/assets/images/shoe.jpg";
import Image from "next/image";
import ProductCarasoulDetails from "../components/ProductCarasoulDetails"
import Stars from "../components/Stars";
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import { showtoast } from "../utilis/showtoast"

const ProductDetail = ({ IsOpen, IsClose, ProductInfo }) => {
  const [variation, setVariation] = useState();
  const [variationId, setVariationId] = useState("");
  const { user } = UserAuth();

  const rating = 0;
  const [productData, setproductData] = useState(ProductInfo);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("W"); // Corrected default color
  const [selectedPattern, setSelectedPattern] = useState("W"); // Corrected default pattern
  const [count, setCount] = useState(1);
  const [vImage, setVimage] = useState(0);
  const [id, setid] = useState("");
  useEffect(() => {
    if (ProductInfo) {
      setVariation(ProductInfo.variations);
      setproductData(ProductInfo);
      setVariationId(ProductInfo.variations[0]._id);
      setid(ProductInfo._id);
      return;

    }

  }, [ProductInfo, setVariation, setproductData, setVariation, id, setid])

  if (!IsOpen) {
    return null;
  }



  const addProductToCart = async () => {
    try {
      const user_id = user.email.split("@")[0];
      const product_id = id;

      const response = await axios.post("/api/cart/addProduct", {
        user_id,
        product_id,
        variationId,
        quantity: count,
      });

      if (response.status === 200) {
        showtoast("success", "Product added to cart successfully");

      } else {
        showtoast("error", `Error adding product to cart ${response.statusText}`)
      }
    } catch (error) {
      showtoast(`Error adding product to cart: ${error.message}`)
    }
  };
  const addToWishlist = async () => {
    console.log("hello")
    try {
      const user_id = user.email.split("@")[0];
      const product_id = id;
      console.log(user_id);

      const response = await axios.post("/api/wishlist/addProduct", {
        user_id,
        product_id,
        variationId,
      });

      if (response.status === 200) {
        showtoast("success", "Product added to wishlist successfully");
      } else {
        showtoast("error", `Error adding product to wishlist ${response.statusText}`);
      }
    } catch (error) {
      showtoast("error", `Error adding product to wishlist ${error.message}`);
    }
  };

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
    <div className="absolute top-0 left-0 z-[1000]">
      <div className="fixed top-0 z-[1000] left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="border  w-3/4  mx-auto bg-white p-0 m-0">
          <div className="flex justify-end m-4">
            <button
              className="text-gray-700 text-xl p-0 m-0" onClick={IsClose}
            >
              <RxCross2 />
            </button>
          </div>
          <div className="border-grey-300 border-solid border"></div>

          <div className="flex-1">
            <div className="max-w-full mx-auto flex flex-col lg:flex-row p-4 lg:p-8 bg-white rounded-lg">
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                {variation && (
                  <ProductCarasoulDetails
                    variation={variation}
                    index={vImage}
                  />
                )}
              </div>
              <div className="lg:w-1/2 flex-1 pl-0   p-5">
                <h2 className="text-lg lg:text-2xl text-yellow-500 font-bold mb-4">
                  {productData && productData.productName}
                </h2>
                <div className="flex items-center mb-4 ">
                  <span className="text-gray-700 mr-2">Price:</span>
                  <span className="text-lg lg:text-xl font-bold text-yellow-500">
                    ₹ {productData.productPrice}
                  </span>
                </div>

                <div className="text-sm lg:text-base text-gray-600 mb-4 whitespace-normal">
                  {productData.productShortDescription}
                </div>
                <div className="flex items-center mb-4">
                  <Stars stars={rating} />
                </div>
                <div className="border border-grey-300 border-solid border m-3 "></div>
                <div className="flex flex-row border-2  overflow-x-scroll		scrollbar-hide">
                  {variation &&
                    variation.map((item, index) => (
                      <div
                        key={index}
                        className="flex p-3 flex-col items-start  gap-1 border justify-start min-w-[150px] text-black font-Poppins_light w-fit"
                        onClick={() => {
                          setVimage(index);
                          setVariationId(item._id);
                        }}
                      >
                        <Image
                          className="cursor-pointer  rounded-lg"
                          src={item.productImage[0]}
                          width={150}
                          height={150}
                        />
                        <div className="">Size: {item.productSize}</div>
                        <div className="">Pattern: {item.productSize}</div>
                        <div className="">colour: {item.productColor}</div>
                      </div>
                    ))}
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
                    onClick={addProductToCart}
                    className="cursor-pointer bg-yellow-500 text-white m-2 px-8 lg:px-6 py-4  hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
                  >
                    Add to Cart
                  </button>
                  <div className="text-gray-700 text-xl p-0 m-3 cursor-pointer">
                    <IoMdHeartEmpty onClick={addToWishlist} />
                  </div>
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
