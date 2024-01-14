import React,{useState} from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import Image from "next/image";
import Stars from "../Stars.jsx";

const BigCard = ({ img, label, desc, rating, price }) => {
  const [active,setActive] = useState(false);
  return (

    <div className="p-2">
      <div className=" rounded-lg ">
        <div className="max-h-fit flex items-center justify-center relative overflow-hidden">
          <Image
            className="cursor-pointer w-full h-full py-4 md:py-12"
            src={img[0]}
            alt={label}
            width={350}
            height={400}

          />
          <div className="absolute bottom-0 w-full h-full flex items-end translate-y-20 hover:translate-y-0 transition-transform ease-in-out duration-500">
            <div className="p-2 xs:p-3 md:p-4 bg-purple-500 hover:bg-black transition ease-in-out">
              <FaRegHeart />
            </div>
            <div className="hidden sm:block flex-1 text-center font-semibold text-md  py-2 md:py-3 bg-purple-500 hover:bg-black transition ease-in-out">
              Select Option
            </div>
            <div className="block sm:hidden flex-1 text-center font-semibold text-xs  py-2 md:py-3 bg-purple-500 hover:bg-black transition ease-in-out">
              Select
            </div>
            <div className="p-2 xs:p-3 md:p-4 bg-purple-500 hover:bg-black transition ease-in-out">
              <FaRegEye />
            </div>
          </div>
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
