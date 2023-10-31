import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductCarasoulDetails = () => {
  return (
    <div className="text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
        >
        <img src="/assets/images/shoe2.jpg" />
        <img src="/assets/images/shoe2.jpg" />
        <img src="/assets/images/shoe2.jpg" />
        <img src="/assets/images/shoe2.jpg" />
      </Carousel>
    </div>
  );
};

export default ProductCarasoulDetails;
