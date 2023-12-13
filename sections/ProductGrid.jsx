import React, { useState } from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { RiGridFill } from "react-icons/ri";
import { products } from "../data/ProductsData";
import ProductCard from "../components/ProductCard";
import BigCard from "../components/ProductCards/BigCard";
import SmallCard from "../components/ProductCards/SmallCard";
import ListCard from "../components/ProductCards/ListCard";


import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";



const ProductGrid = () => {
  const [gridstate, setGridstate] = useState("big");




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
    <div className="flex-grow w-full p-3 lg:px-16">
      <div className="flex items-center justify-between">
        <p>Default</p>
        <div className="flex items-center gap-3">
          <BsFillGridFill
            size={25}
            onClick={handlebigtile}
            className="cursor-pointer hover:text-secondary"
          />
          <RiGridFill
            onClick={handlesmalltile}
            size={25}
            className="cursor-pointer hover:text-secondary"
          />
          <BsListUl
            onClick={handlelist}
            size={25}
            className="cursor-pointer hover:text-secondary"
          />
        </div>
      </div>

      <div className="flex items-center mt-5">
        {gridstate === "big" && <div
        className="container mx-auto grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-10 xl:gap-y-10"
        >

{products.map((item, index) => (
            <Link href={`/products/${item.id}`} key={index}>
              <div className="">
                <BigCard
                  img={item.photo}
                  label={item.label}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                />
              </div>
            </Link>
          ))}
          
          </div>}



          {gridstate === "small" && <div
        className="container mx-auto grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-x-8 xl:gap-y-8"
        >{products.map((item, index) => (
            <Link href={`/products/${item.id}`} key={index}>
              <div className="">
                <SmallCard
                  img={item.photo}
                  label={item.label}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                />
              </div>
            </Link>
          ))}
          
          </div>}
          {gridstate === "list" && <div
          className="flex flex-col "
        >{products.map((item, index) => (
            <Link href={`/products/${item.id}`} key={index}>
              <div className="">
                <ListCard
                  img={item.photo}
                  label={item.label}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                />
              </div>
            </Link>
          ))}
          
          </div>}
      </div>
    </div>
  );
};

export default ProductGrid;
