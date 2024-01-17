import React, { useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link.js";
import Image from "next/image";
import Stars from "../Stars.jsx";
import ProductDetail from "../../sections/ProductDetail.jsx";
const BigCard = ({
  img,
  label,
  desc,
  rating,
  price,
  ProductId,
  ProductInfo,
}) => {
  const [IsOpen, SetIsOpen] = useState(false);
  const openDialog = () => {
    SetIsOpen(true);
  };
  const closeDialog = () => {
    SetIsOpen(false);
  };

  return (
    <div className="p-2">
      <div>
        {ProductInfo && (
          <ProductDetail
            IsOpen={IsOpen}
            IsClose={closeDialog}
            ProductInfo={ProductInfo}
          />
        )}
      </div>
      <div className=" rounded-lg border-2">
        <div className="max-h-fit flex items-center justify-center  overflow-hidden relative">
          <Image
            className="cursor-pointer w-full h-full py-4 md:py-12"
            src={img[0]}
            alt={label}
            width={350}
            height={400}
          />
          <div className="absolute bottom-0 w-full h-full flex items-end translate-y-20 hover:translate-y-0 transition-transform ease-in-out duration-500">
            <div className="p-2 xs:p-3 md:p-4 cursor-pointer bg-purple-500 hover:bg-black transition ease-in-out">
              <FaRegHeart />
            </div>
            <Link
              href={`/products/${ProductId}`}
              className="hidden sm:block flex-1 text-center font-semibold text-md cursor-pointer py-2 md:py-3 bg-purple-500 hover:bg-black transition ease-in-out"
            >
              Select Option
            </Link>
            <Link
              href={`/products/${ProductId}`}
              className="block sm:hidden flex-1 text-center font-semibold text-xs  py-2 md:py-3 bg-purple-500 hover:bg-black transition ease-in-out"
            >
              Select
            </Link>
            <div
              className="p-2 xs:p-3 md:p-4 bg-purple-500 hover:bg-black transition ease-in-out cursor-pointer"
              onClick={openDialog}
            >
              <FaRegEye />
              {/* <ProductDetail/> */}
            </div>
          </div>
        </div>

        {/* <div className="absolute flex items-center justify-center top-[50%] left-[50%]  transition-all ease-in duration-300">
          <div className="flex items-center gap-3 absolute ">
            <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
              <BsBoxArrowInRight size={30} className="text-background" />
            </div>

            <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
              <AiOutlineEye size={30} className="text-background" onClick={()=>{setActive(!active)}} />
              
            </div>
          </div>
        </div> */}
      </div>
      <div
        className={`flex-col justify-center items-center text-black font-Poppins_light  `}
      >
        <div className="text-center m-2 text-[25px] cursor-pointer font-normal hover:text-purple-500 transition ease-in-out duration-300">
          <Link href={`/products/${ProductId}`}>{label}</Link>
        </div>
        <div className="m-auto flex  items-center justify-center">
          <Stars Stars={rating} />
        </div>{" "}
        <div className="text-center m-2 font-normal">₹ {price}</div>
      </div>
    </div>
  );
};

export default BigCard;
