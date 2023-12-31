import React, { useEffect, useState } from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { RiGridFill } from "react-icons/ri";
import { products } from "../data/ProductsData";
import ProductCard from "../components/ProductCard";
import BigCard from "../components/ProductCards/BigCard";
import SmallCard from "../components/ProductCards/SmallCard";
import ListCard from "../components/ProductCards/ListCard";

import axios from "axios";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const ProductGrid = ({ selectedFilters }) => {
  const [gridstate, setGridstate] = useState("big");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalProducts, setOriginalProducts] = useState([]);
  let response;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("/api/product/getAllProducts");
        console.log(response);
        setProducts(response.data);
        setOriginalProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const nonEmptyFilters = selectedFilters.filter((filter) => filter !== "");

      if (nonEmptyFilters.length === 0) {
        setProducts(originalProducts);
      } else {
        const filteredProducts = originalProducts.filter((product) => {
          return product.variations.some(
            (variation) =>
              nonEmptyFilters.includes(variation.productCategory) ||
              nonEmptyFilters.includes(variation.productColor) ||
              nonEmptyFilters.includes(variation.productPattern)
          );
        });

        setProducts(filteredProducts);
      }
    };

    filterProducts();
  }, [selectedFilters, originalProducts]);

  const handlebigtile = () => {
    setGridstate("big");
  };
  const handlesmalltile = () => {
    setGridstate("small");
  };
  const handlelist = () => {
    setGridstate("list");
  };

  return (
    <div className="flex-grow w-full flex-row  items-center ">
      <div className="flex items-center justify-between">
        <p>Default</p>
        <div className="flex items-center gap-3">
          <BsFillGridFill
            size={25}
            onClick={handlebigtile}
            className="cursor-pointer text-gray-400 hover:text-secondary transition-colors duration-300"
          />
          <RiGridFill
            onClick={handlesmalltile}
            size={25}
            className="cursor-pointer text-gray-400 hover:text-secondary transition-colors duration-300"
          />
          <BsListUl
            onClick={handlelist}
            size={25}
            className="cursor-pointer text-gray-400 hover:text-secondary transition-colors duration-300"
          />
        </div>
      </div>

      <div className="flex items-center mt-1 w-full ">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {gridstate === "big" && (
              <div className="flex flex-wrap w-full px-18">
                {products.map((item, index) => (
                  <Link
                    href={`/products/${item._id}`}
                    key={index}
                    className="w-1/2"
                  >
                    <div className="w-full">
                      <BigCard
                        img={
                          item.variations && item.variations.length > 0
                            ? item.variations[0].productImage
                            : ""
                        }
                        label={
                          item.productName
                            ? item.productName
                            : variations[0].productImage
                        }
                        desc={item.productShortDescription}
                        rating={5}
                        price={item.productPrice}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {gridstate === "small" && (
              <div className="flex flex-row flex-wrap  w-full justify-start	">
                {products.map((item, index) => (
                  <Link href={`/products/${item._id}`} key={index}>
                    <div className="m-3">
                      <SmallCard
                        img={
                          item.variations && item.variations.length > 0
                            ? item.variations[0].productImage
                            : ""
                        }
                        label={
                          item.productName ? "helo" : variations[0].productImage
                        }
                        desc={item.productShortDescription}
                        rating={5}
                        price={item.productPrice}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {gridstate === "list" && (
              <div className="flex flex-col w-full justify-center items-center ">
                {products.map((item, index) => (
                  <Link href={`/products/${item._id}`} key={index}>
                    <div className="">
                      <ListCard
                        img={
                          item.variations && item.variations.length > 0
                            ? item.variations[0].productImage
                            : ""
                        }
                        label={
                          item.productName ? "helo" : variations[0].productImage
                        }
                        desc={item.productShortDescription}
                        rating={5}
                        price={item.productPrice}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
