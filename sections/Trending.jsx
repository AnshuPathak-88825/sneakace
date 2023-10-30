import React from "react";
import { data } from "../data/mockData";
import Image from "next/image";
const Trending = () => {
  return (
    <div className="w-full py-10 p-5">
      <div className="flex items-center justify-center">
        <h2>TRENDING</h2>
      </div>
      <div className="relative flex items-center">
        <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap">
          {data.map((item) => (
            <Image
              src={item.photo}
              alt={item.id}
              width={100}
              height={100}
              key={item.id}
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
