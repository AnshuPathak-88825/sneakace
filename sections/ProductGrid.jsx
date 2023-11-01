import React from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { RiGridFill } from "react-icons/ri";
import { products } from "../data/ProductsData";
import ProductCard from "../components/ProductCard";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
const ProductGrid = () => {
  return (
    <div className="flex-grow w-full p-3 px-16">
      <div className="flex items-center justify-between">
        <p>Default</p>
        <div className="flex items-center gap-3">
          <BsFillGridFill
            size={25}
            className="cursor-pointer hover:text-secondary"
          />
          <RiGridFill
            size={25}
            className="cursor-pointer hover:text-secondary"
          />
          <BsListUl size={25} className="cursor-pointer hover:text-secondary" />
        </div>
      </div>

      <div className="flex items-center mt-5">
        <div className="container mx-auto grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-10 xl:gap-y-10">
          {products.map((item, index) => (
            <Link href={`/products/${item.id}`} key={index}>
              <div className="">
                <ProductCard
                  img={item.photo}
                  label={item.label}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                />

                {/* <div className="absolute flex items-center justify-center -bottom-10 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
                    <Image
                      src={item.photo2}
                      alt={item.id}
                      width={300}
                      height={300}
                      className="w-[400px] rounded-2xl inline-block p-2 cursor-pointer "
                    />
                    <div className="flex items-center gap-3 absolute ">
                      <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
                        <BsBoxArrowInRight
                          size={30}
                          className="text-background"
                        />
                      </div>

                      <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
                        <AiOutlineEye size={30} className="text-background" />
                      </div>
                    </div>
                  </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
