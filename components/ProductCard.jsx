import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons";
import Stars from "./Stars";
const ProductCard = ({ img, label, desc, rating, price }) => {
  

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto cursor-pointer"
          src={img}
          alt={label}
          width={200}
          height={300}
        />
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
