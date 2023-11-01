import React from "react";
import Image from "next/image";
import bg from "../public/assets/images/shoe.jpg";
import Link from "next/link";
const Categories = () => {
  return (
    <div className="w-full bg-primary text-black rounded-br-[70px] lg:rounded-br-[130px] rounded-bl-[70px] lg:rounded-bl-[130px]">
      <div className="container mx-auto py-10 p-3">
        <div className="flex items-center justify-center">
          <h2 className="text-background font-bannerHeading">CATEGORIES</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-10 mt-3">
          <div className="flex flex-col items-center gap-5">
            {/* Left Side */}

            <Link href="/products">
              <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
                <div className="lg:w-[320px] 2xl:w-[550px] lg:h-[265px]">
                  <Image
                    src={bg}
                    alt="bg-image"
                    className="h-full relative w-full object-cover  group-hover:scale-125 transition-transform"
                  />
                  <p className="text-white absolute flex text-xl font-normal  justify-end w-full h-full p-3 top-20">
                    Starting at $99.0
                  </p>
                  <p className="text-secondary absolute flex justify-end w-full h-full p-3 top-10">
                    CATEGORY 1
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/products">
              <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
                <div className="lg:w-[320px] 2xl:w-[550px] lg:h-[265px]">
                  <Image
                    src={bg}
                    alt="bg-image"
                    className="h-full relative w-full object-cover  group-hover:scale-125 transition-transform"
                  />
                  <p className="text-white absolute flex text-xl font-normal  justify-end w-full h-full p-3 top-20">
                    Starting at $99.0
                  </p>
                  <p className="text-secondary absolute flex justify-end w-full h-full p-3 top-10">
                    CATEGORY 2
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Middle Side */}
          <Link href="/products">
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
          </Link>

          {/* Right Side */}

          <div className="flex flex-col items-center gap-5">
            <Link href="/products">
              <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
                <div className="lg:w-[320px] 2xl:w-[550px] lg:h-[265px]">
                  <Image
                    src={bg}
                    alt="bg-image"
                    className="h-full relative w-full object-cover  group-hover:scale-125 transition-transform"
                  />
                  <p className="text-white absolute flex text-xl font-normal  justify-end w-full h-full p-3 top-20">
                    Starting at $99.0
                  </p>
                  <p className="text-secondary absolute flex justify-end w-full h-full p-3 top-10">
                    CATEGORY 3
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/products">
              <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
                <div className="lg:w-[320px] 2xl:w-[550px] lg:h-[265px]">
                  <Image
                    src={bg}
                    alt="bg-image"
                    className="h-full relative w-full object-cover  group-hover:scale-125 transition-transform"
                  />
                  <p className="text-white absolute flex text-xl font-normal  justify-end w-full h-full p-3 top-20">
                    Starting at $99.0
                  </p>
                  <p className="text-secondary absolute flex justify-end w-full h-full p-3 top-10">
                    CATEGORY 4
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Down Side */}

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-2">
          <Link href="/products">
            <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
              <div className="lg:w-[500px] 2xl:w-[871.11px] lg:h-[350.04px]">
                <Image
                  src={bg}
                  alt="bg-image"
                  className="h-full relative w-full object-cover  group-hover:scale-125 transition-transform"
                />
                <p className="text-white absolute flex text-xl font-normal  justify-end w-full h-full p-3 top-20">
                  Starting at $99.0
                </p>
                <p className="text-secondary absolute flex justify-end w-full h-full p-3 top-10">
                  CATEGORY 5
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products">
            <div className="group relative items-center justify-center rounded-2xl overflow-hidden cursor-pointer">
              <div className="lg:w-[500px] 2xl:w-[871.11px] lg:h-[350.04px]">
                <Image
                  src={bg}
                  alt="bg-image"
                  className="h-full relative w-full object-cover  group-hover:scale-125 transition-transform"
                />
                <p className="text-white absolute flex text-xl font-normal  justify-end w-full h-full p-3 top-20">
                  Starting at $99.0
                </p>
                <p className="text-secondary absolute flex justify-end w-full h-full p-3 top-10">
                  CATEGORY 6
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
