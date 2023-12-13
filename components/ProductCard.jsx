import Image from "next/image";
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import Stars from "./Stars";
const ProductCard = ({ img, label, desc, rating, price, gridstate }) => {
  console.log(gridstate);

  return (
    <div>
      {gridstate === "list" ? (
        <div>
          <div className="flex flex-col rounded-md mt-4  w-[60vw] h-[35vh] border-2">
            <div className="left">
              <Image
                className={` cursor-pointer border-2 m-5`}
                src={img}
                alt={label}
                width={140}
                height={140}
              />
              <div className="absolute flex items-center justify-center -bottom-10 opacity-100 group-hover:opacity-0 transition-all ease-in duration-300 border-2">
                <Image
                  src={img}
                  alt={label}
                  width={140}
                  height={140}
                  className={`rounded-2xl inline-block p-2 cursor-pointer `}
                />
                
                <div className="flex items-center gap-3 absolute ">
                  <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
                    <BsBoxArrowInRight size={30} className="text-background" />
                  </div>

                  <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
                    <AiOutlineEye size={30} className="text-background" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      ) : (
        <div
          className={` ${
            gridstate === "big" ? "px-4 max-w-[400px]" : "px-1 max-w-[300px]"
          }
     border border-gray-200 rounded-xl `}
        >
          <div className="group relative overflow-hidden mt-2 rounded-xl">
            <Image
              className={`h-auto cursor-pointer
          ${gridstate === "big" ? "w-full h-full" : "w-[40%] h-[40%]"}`}
              src={img}
              alt={label}
              width={200}
              height={200}
            />

            <div className="absolute flex items-center justify-center -bottom-10 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 border-2">
              <Image
                src={img}
                alt={label}
                width={300}
                height={200}
                className={`
            ${gridstate === "big" ? "w-[400px]" : "w-[50]"}
             rounded-2xl inline-block p-2 cursor-pointer `}
              />
              <div className="flex items-center gap-3 absolute ">
                <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
                  <BsBoxArrowInRight size={30} className="text-background" />
                </div>

                <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
                  <AiOutlineEye size={30} className="text-background" />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`
      ${gridstate === "big" ? "py-2" : "py-1"}
      space-y-2 cursor-pointer`}
          >
            <p
              className={`
        ${gridstate === "big" ? "text-2xl" : "text-xl"}
        `}
            >
              {label}
            </p>
            <p
              className={`
        ${gridstate === "big" ? "text-lg" : "text-sm"}
        `}
            >
              {desc}
            </p>
            <Stars stars={rating} />
            <p
              className={`
        ${gridstate === "big" ? "text-lg" : "text-sm"}
        `}
            >
              {price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
