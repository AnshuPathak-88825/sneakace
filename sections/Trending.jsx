import React from "react";
import { data } from "../data/mockData";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";
const Trending = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className="w-full py-10 p-5">
      <div className="flex items-center justify-center">
        <h2 className="text-secondary">TRENDING</h2>
      </div>

      <div className="flex items-center justify-center gap-5 mt-5">
        <p className="text-2xl cursor-pointer">New Arrivals</p>
        <p className="text-2xl cursor-pointer">Best Sellers</p>
        <p className="text-2xl cursor-pointer">Sales Items</p>
      </div>
      <div className="relative flex items-center justify-center bg-[#FEF9EC] p-3 rounded-xl mt-5">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 text-background"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll overflow-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <div className="flex">
            {data.map((item) => (
              <div key={item.id} className="group flex flex-col">
                <Image
                  src={item.photo}
                  alt={item.id}
                  width={300}
                  height={300}
                  className="w-[300px] inline-block p-2 cursor-pointer "
                />
                <div className="flex flex-col items-center">
                  <p className="text-black text-lg w-[400px] cursor-pointer ">
                    {item.label}
                  </p>
                  <p className="text-black text-lg w-[400px] cursor-pointer">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-background"
          onClick={slideRight}
          size={40}
        />
      </div>

      <div className="flex items-center justify-center mt-3">
        <Link href="/products">
          <p className="font-normal font-logo">View All Products</p>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
