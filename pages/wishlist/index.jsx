import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai"; // This is the dustbin icon

import img from "../../public/assets/images/shoe2.jpg";
import { UserAuth } from "../../context/AuthContext";
import axios from "axios";
import { useRouter } from "next/router";
const Wishlist = () => {
  const iconStyle = {
    cursor: "pointer",
    color: "black",
  };

  const [wishlist, setWishlist] = useState(null);
  const [productList, setProductList] = useState([]);
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user) {
        const user_id = user.email.split("@")[0];

        try {
          const response = await axios.post("/api/wishlist/getWishlist", {
            user_id,
          });

          if (response.status === 200) {
            setWishlist(response.data.data);
          } else {
            console.error("Error fetching wishlist:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching wishlist:", error.message);
        }
      }
    };

    fetchWishlist();
  }, [user]);

  useEffect(() => {
    const fetchProductList = async () => {
      if (wishlist) {
        try {
          let updatedProductList = [];

          for (const wishlistItem of wishlist.products) {
            const { product, variationId } = wishlistItem;

            const productResponse = await axios.get(
              `/api/product/getProductById?id=${product}`
            );
            const productDetails = productResponse.data.data;

            const variationDetails = productDetails.variations.find(
              (variation) => variation._id === variationId
            );

            updatedProductList.push({
              product: productDetails,
              variation: variationDetails,
              quantity: 1,
            });
          }

          setProductList(updatedProductList);
        } catch (error) {
          console.error("Error fetching product details:", error.message);
        }
      }
    };

    fetchProductList();
  }, [wishlist]);

  async function deleteProductFromWishlist(product_id, variationId) {
    try {
      const user_id = user.email.split("@")[0];

      const response = await axios.delete("/api/wishlist/deleteProduct", {
        data: { user_id, product_id, variationId },
      });

      if (response.status === 200 && response.data.success) {
        console.log("Product deleted from wishlist:", response.data.data);
        return true;
      } else {
        console.error(
          "Error deleting product from wishlist:",
          response.data.error
        );
        return false;
      }
    } catch (error) {
      console.error("Error deleting product from wishlist:", error.message);
      return false;
    }
  }

  const addToCartAndRemoveFromWishlist = async (product_id, variationId) => {
    try {
      const user_id = user.email.split("@")[0];

      const response = await axios.post("/api/cart/addProduct", {
        user_id,
        product_id,
        variationId,
        quantity: 1,
      });

      if (response.status === 200) {
        console.log("Product added to cart successfully");
        deleteProductFromWishlist(product_id);
      } else {
        console.error("Error adding product to cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
    }
  };

  return (
    <div className="text-black bg-white w-full h-auto my-24 lg:px-48  flex justify-center">
      <div className="px-12 py-12 bg-white w-full flex flex-col">
        <div className="text-3xl text-white">Your wishlist items</div>
        <div className="flex flex-row mt-6 w-full bg-slate-200	 ">
          <div className="w-1/6 flex py-4 justify-center  ">IMAGE</div>
          <div className="w-1/3 flex py-4 justify-center ">PRODUCT NAME</div>
          <div className="w-1/6 flex py-4 justify-center ">UNIT PRICE</div>
          <div className="w-1/6 flex py-4 justify-center ">ADD TO CART</div>
          <div className="w-1/6 flex py-4 justify-center ">ACTION</div>
        </div>
        {productList.map((item) => (
          <div
            key={item.product.productId}
            className="flex flex-row mt-6 bg-white w-full"
          >
            <div className="w-1/6 flex p-4 justify-center">
              <Image
                width={100}
                height={100}
                src={item.variation.productImage[0]} // Replace with the actual image source property
                alt={item.product.productName}
                className="w-full rounded-2xl inline-block cursor-pointer"
              />
            </div>
            <Link
              href={`/products/${item.product._id}`}
              className="w-1/3 flex p-4 items-center justify-center"
            >
              {item.product.productName}
            </Link>
            <div className="w-1/6 flex p-4 items-center justify-center">
              {`€${item.product.productPrice}`}{" "}
            </div>
            <div
              onClick={() => {
                addToCartAndRemoveFromWishlist(
                  item.product._id,
                  item.variation._id
                );
              }}
              className="w-1/6 flex p-4 items-center justify-center"
            >
              ADD TO CART
            </div>
            <div className="w-1/6 flex p-4 items-center justify-center">
              <AiOutlineDelete
                onClick={() => {
                  deleteProductFromWishlist(
                    item.product._id,
                    item.variation._id
                  );
                }}
                size={40}
                style={iconStyle}
              />
            </div>
          </div>
        ))}

        <div className="bg-white text-black h-auto mt-0">
          <div className="flex justify-between py-5 px-12 lg:px-24 bg-white">
            <div className="w-auto border-2 rounded-[50px] bg-slate-300">
              <Link href="products">
                <button
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="text-xl lg:text-2xl  px-12 lg:px-20 py-5"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
            <div className="w-auto border-2 rounded-[50px] bg-slate-300">
              <button className="text-xl lg:text-2xl  px-12 lg:px-20 py-5">
                Clear Shopping Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
