import React from "react";
import Image from "next/image";
import bg from "../public/assets/images/shoe.jpg";
const Categories = () => {
  return (
    <div className="w-full bg-primary text-black rounded-br-[70px] lg:rounded-br-[130px] rounded-bl-[70px] lg:rounded-bl-[130px]">
      <div className="container mx-auto py-10 p-3">
        <div className="flex items-center justify-center">
          <h2 className="text-secondary font-bannerHeading">CATEGORIES</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-10 mt-3">
          <div className="flex flex-col items-center gap-5">
            <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
              <div className="lg:w-[320px] lg:h-[265px]">
                <Image
                  src={bg}
                  alt="bg-image"
                  className="h-full w-full object-cover  group-hover:scale-125 transition-transform"
                />
              </div>
            </div>

            <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
              <div className="lg:w-[320px] lg:h-[265px]">
                <Image
                  src={bg}
                  alt="bg-image"
                  className="h-full w-full object-cover  group-hover:scale-125 transition-transform"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
              <div className="lg:w-[651.38px] lg:h-[574.23px]">
                <Image
                  src={bg}
                  alt="bg-image"
                  className="h-full w-full object-cover  group-hover:scale-125 transition-transform"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
              <div className="lg:w-[320px] lg:h-[265px]">
                <Image
                  src={bg}
                  alt="bg-image"
                  className="h-full w-full object-cover  group-hover:scale-125 transition-transform"
                />
              </div>
            </div>

            <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
              <div className="lg:w-[320px] lg:h-[265px]">
                <Image
                  src={bg}
                  alt="bg-image"
                  className="h-full w-full object-cover  group-hover:scale-125 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-2">
          <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
            <div className="lg:w-[871.11px] lg:h-[246.04px]">
              <Image
                src={bg}
                alt="bg-image"
                className="h-full w-full object-cover  group-hover:scale-125 transition-transform"
              />
            </div>
          </div>

          <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
            <div className="lg:w-[871.11px] lg:h-[246.04px]">
              <Image
                src={bg}
                alt="bg-image"
                className="h-full w-full object-cover  group-hover:scale-125 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
