import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai"; // This is the dustbin icon

import img from "../../public/assets/images/shoe2.jpg"
const Wishlist = () => {
    const iconStyle = {
        cursor: "pointer",
        color: "black",
      };
  return <div className="text-black bg-white w-full h-auto my-24 lg:px-48  flex justify-center">
    <div className="px-12 py-12 bg-white w-full flex flex-col">
        <div className="text-3xl text-white">
           Your wishlist items
        </div>
        <div className="flex flex-row mt-6 w-full bg-slate-200	 ">
            <div className="w-1/6 flex py-4 justify-center  ">IMAGE</div>
            <div className="w-1/3 flex py-4 justify-center ">PRODUCT NAME</div>
            <div className="w-1/6 flex py-4 justify-center ">UNIT PRICE</div>
            <div className="w-1/6 flex py-4 justify-center ">ADD TO CART</div>
            <div className="w-1/6 flex py-4 justify-center ">ACTION</div>
        </div>
        {
            [1,2,3,4,5,6].map((index)=>{
                return (<div key={index}  className="flex flex-row mt-6 bg-white w-full">
                <div className="w-1/6 flex p-4 justify-center  ">
                <Image
                  src={img}
                  alt={"Not found"}
                  className="w-full rounded-2xl  inline-block  cursor-pointer "
                />
                </div>
                <div className="w-1/3 flex p-4 items-center justify-center ">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis fuga labore officiis! Corporis distinctio repellendus asperiores.</div>
                <div className="w-1/6 flex p-4 items-center justify-center">
                    €3.10€2.79</div>
                <div className="w-1/6 flex p-4 items-center justify-center">ADD TO CART</div>
                <div className="w-1/6 flex p-4 items-center justify-center">
                <AiOutlineDelete size={40} style={iconStyle} /> 
                </div>
            </div>)
            })
        }


    </div>
    </div>;
};

export default Wishlist;
