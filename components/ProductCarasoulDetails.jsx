import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductCarasoulDetails = ({ variation, index }) => {
  return (
    <div className="text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        

        {variation&&variation[0].productImage.map((item, index) => (
         
          <Image src={item} key={index} width={129} height={400} alt="shoe" />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarasoulDetails;
