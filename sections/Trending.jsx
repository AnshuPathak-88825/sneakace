import React, { useState, useTransition } from "react";
import { data } from "../data/mockData";
import { products } from "../data/ProductsData";
import { AiOutlineEye } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import TabButton from "../components/TabButton";
import ProductDetail from "../sections/ProductDetail"
import Link from "next/link";


// 'use client'; // For Next JS 13 app router

import dynamic from 'next/dynamic';

const ScrollCarousel = dynamic(() => import('../components/ScrollCarasoul'), { ssr: false });


const Trending = () => {
  const [ProductVisible, setProductVisible] = useState(false);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  const [tab, setTab] = useState("Best Sellers");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Best Sellers",
      id: "Best Sellers",
      content: (
        <div className="flex">
          {data.map((item) => (
            <div key={item.id} className="group flex flex-col">
              <div className="relative overflow-hidden">
                <Image
                  src={item.photo}
                  alt={item.id}
                  width={300}
                  height={300}
                  className="w-[400px] rounded-2xl inline-block p-2 cursor-pointer "
                />

                <div className="absolute flex items-center justify-center -bottom-10 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
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

                    <div className="p-2 rounded-full bg-secondary text-background cursor-pointer" onClick={()=>{setProductVisible(!ProductVisible)}}>
                      <AiOutlineEye size={30} className="text-background" />
                      {ProductVisible&&<ProductDetail ProductVisible={ProductVisible} setProductVisible={setProductVisible}/>}
                    </div>
                  </div>
                </div>
              </div>
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
      ),
    },
    {
      title: "New Arrivals",
      id: "New Arrivals",
      content: (
        <div className="flex">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative overflow-hidden">
                <Image
                  src={product.photo}
                  alt={product.id}
                  width={300}
                  height={300}
                  className="w-[300px] inline-block p-2 cursor-pointer "
                />

                <div className="absolute flex items-center justify-center -bottom-10 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
                  <Image
                    src={product.photo2}
                    alt={product.id}
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

                    <div className="p-2 rounded-full bg-secondary text-background cursor-pointer" onClick={()=>{setProductVisible(!ProductVisible)}}>
                      <AiOutlineEye size={30} className="text-background" />
                      {ProductVisible&&<ProductDetail ProductVisible={ProductVisible} setProductVisible={setProductVisible}/>}

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-black text-lg w-[400px] cursor-pointer ">
                  {product.label}
                </p>
                <p className="text-black text-lg w-[400px] cursor-pointer">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Sale Items",
      id: "Sale Items",
      content: (
        <div className="flex">
          {products.map((item) => (
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
      ),
    },
  ];

  return (
    <div className="w-full py-10 p-3 lg:p-10">
      <div className="flex items-center justify-center gap-5 mt-5">
        <TabButton
          selectTab={() => handleTabChange("New Arrivals")}
          active={tab === "New Arrivals"}>
          New Arrivals
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Best Sellers")}
          active={tab === "Best Sellers"}>
          Best Sellers
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Sale Items")}
          active={tab === "Sale Items"}>
          Sale Items
        </TabButton>
      </div>


      {/* Scroll you have to delete the below div to delete it */}
      <div className="demo bg-[#FEF9EC] p-4 rounded-xl mt-5">
          <ScrollCarousel />
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
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-background"
          onClick={slideRight}
          size={40}
        />
      </div>

      <div className="flex items-center justify-center mt-3">
      <Link href="/products" className=" text-white underline hover:underline transition-all duration-300 ease-in-out hover:text-[#FFCF00]">
      <p className="font-normal text-lg font-Poppins_bold">View All Products</p>
    </Link>
      </div>
    </div>
  );
};

export default Trending;

