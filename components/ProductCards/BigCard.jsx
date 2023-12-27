import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import Image from "next/image";
import Stars from "../Stars.jsx";

const BigCard = ({ img, label, desc, rating, price }) => {
  return (
    <div className="px-4 py-2  border border-gray-200 rounded-xl ">
      <div className="    rounded-lg ">
        <div className="min-h-[400px]  ">
        <Image
          className="cursor-pointer w-full h-full "
          src={img[0]}
          alt={label}
          width={350}
          height={400}

        />
        </div>
        
        <div className="absolute flex items-center justify-center top-[50%] left-[50%] opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
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
      <div className={`flex-col justify-center items-center text-black font-Poppins_light  `}>
        <div className="text-center m-2">{label}</div>
        <div className="m-auto flex m-2 items-center justify-center">
          <Stars Stars={rating} />
        </div>  <div className="text-center m-2 font-bold">₹ {price}</div>
      </div>

    </div>
  );
};

export default BigCard;
