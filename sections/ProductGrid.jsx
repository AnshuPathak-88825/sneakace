import React from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { RiGridFill } from "react-icons/ri";
import { products } from "../data/ProductsData";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
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
        <div className="container mx-auto grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-10 xl:gap-y-10">
          {products.map((item, index) => (
            <Link href={`/products/${item.id}`} key={index}>
              <ProductCard
                img={item.photo}
                label={item.label}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
