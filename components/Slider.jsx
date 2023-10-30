import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Slider = () => {
  const customizeProducts = [
    {
      url: "/assets/images/shoe.jpg",
      label: "product1",
    },
    {
      url: "/assets/images/logo.svg",
      label: "product2",
    },
    {
      url: "/assets/images/shoe.jpg",
      label: "product3",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currIndex == 0;
    const newIndex = isFirstSlide
      ? customizeProducts.length - 1
      : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currIndex === customizeProducts.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrIndex(slideIndex);
  };

  return (
    <div className="max-w-[400px] rounded-xl h-[400px] w-full mx-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${customizeProducts[currIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={25} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={25} />
      </div>

      
    </div>
  );
};

export default Slider;
