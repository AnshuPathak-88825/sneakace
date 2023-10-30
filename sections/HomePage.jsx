import React from "react";
import Image from "next/image";
import homePage from "../public/assets/images/homePage.svg";
import TransitionEffect from "../components/TransitionEffect";
const HomePage = () => {
  return (
    <div className="w-full lg:h-[80vh] p-3">
      <TransitionEffect />
      {/* <Image src="https://giphy.com/clips/southpark-south-park-sneakers-adidas-x-StGHM8jxjXthSs2kHx" width={700} height={700} /> */}
    </div>
  );
};

export default HomePage;
