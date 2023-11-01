import Image from "next/image";
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import Stars from "./Stars";
const ProductCard = ({ img, label, desc, rating, price }) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div className="group relative overflow-hidden mt-2 rounded-xl">
        <Image
          className="w-full h-auto cursor-pointer"
          src={img}
          alt={label}
          width={200}
          height={300}
        />

        <div className="absolute flex items-center justify-center -bottom-10 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
          <Image
            src={img}
            alt={label}
            width={300}
            height={300}
            className="w-[400px] rounded-2xl inline-block p-2 cursor-pointer "
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

      <div className="space-y-2 py-2 cursor-pointer">
        <p className="text-2xl">{label}</p>
        <p className="text-lg">{desc}</p>
        <Stars stars={rating} />
        <p className="text-lg">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
