import Image from "next/image";
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import Stars from "../Stars";
import FillupButton from "../FillupButton";
import { FaRegHeart } from "react-icons/fa";
const ListCard = ({ img, label, desc, rating, price }) => {
  return (
    <div className="rounded-xl mb-4  lg:w-[60vw] max-h-[35vh] w-full font-Poppins_light border-2  flex" >
      <div className=" flex flex-row  ">
        <div className=" min-w-[120px]">
          <Image
            className={` cursor-pointer p-5 rounded-lg`}
            src={img[0]}
            alt={label}
            width={250}
            height={250}
          />
        </div>
        <div className="py-5  ">
          <div className="flex h-full flex-col justify-around ">
            <p className="text-[25px] text-black font-Poppins_light font-normal hover:text-purple-500 transition ease-in-out duration-300	">{label}</p>
            <p className="text-[25px] text-red-500 font-Poppins_light font-normal relative">₹ {price}</p>
            <p className="text-[20px] text-gray-400 font-Poppins_light font-normal relative">{desc}</p>
            <Stars stars={rating} />

            <div className="flex flex-row gap-2  ">

              <div className="py-0">
                <FillupButton label={"SELECT OPTION"} />
              </div>
              <div className="p-2 rounded-lg  cursor-pointer  text-gray-800 flex items-center ">

                <FaRegHeart />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ListCard;
