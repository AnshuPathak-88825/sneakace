import React, { useContext, useEffect, useState, useTransition } from "react";
import ProductCarasoulDetails from "../../components/ProductCarasoulDetails";
import TransitionEffect from "../../components/TransitionEffect";
import Wrapper from "../../components/Wrapper";
import { FaStar } from "react-icons/fa";
import ColorButtons from "../../components/ColorButtons";
import { AiOutlineCopy } from "react-icons/ai";
import TabButton from "../../components/TabButton";
import { RxCross2 } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Stars from "../../components/Stars";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";
import ReviewsSection from "../../sections/ReviewsSection";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const rating = 0;
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("W");
  const [selectedPattern, setSelectedPattern] = useState("W");
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [variation, setVariation] = useState([]);
  const { user } = UserAuth();
  const [vImage, setVimage] = useState(0);
  const [variationId, setVariationId] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `/api/product/getProductById?id=${id}`
        );
        if (response.status === 200) {
          setProductData(response.data.data);
          setLoading(false);
          setVariation(response.data.data.variations);
          setVariationId(response.data.data.variations[0]._id);
        } else {
          console.error("Error fetching product:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    if (id) {
      getProduct();
    }
  }, [id]);

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
        console.log("Product added to cart successfully");
      } else {
        console.error("Error adding product to cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
    }
  };

  const addToWishlist = async () => {
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
        console.log("Product added to wishlist successfully");
      } else {
        console.error("Error adding product to wishlist:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product to wishlist:", error.message);
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
        <div className="flex flex-col items-center lg:items-start mt-10 gap-5 text-black">
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
        <div className="flex items-center justify-center mt-10 text-center text-black">
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
      content: <ReviewsSection product_id={id} />,
    },
  ];

  return (
    <div className="w-full md:py-20 bg-white">
      <TransitionEffect />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {loading ? (
            <div>loading</div>
          ) : (
            <>
              {" "}
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
                    className=" bg-yellow-500 text-white m-2 px-8 lg:px-6 py-4  hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
                  >
                    Add to Cart
                  </button>
                  <div className="text-gray-700 text-xl p-0 m-3 cursor-pointer">
                    <IoMdHeartEmpty onClick={addToWishlist} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center justify-center gap-5 mt-5 text-black ">
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
