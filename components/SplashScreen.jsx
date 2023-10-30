"use client"
import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import design from "../public/assets/images/navbar-design.svg";
const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 2000,
      easing: "easeInOutExpo",
      translateX: -200,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div className="w-full h-screen">
        {/* <Image src={design} alt="design" className="z-[980] absolute top-0" /> */}
        <div
          className="flex flex-col gap-5 items-center justify-center w-full h-full"
          id="logo"
          isMounted={isMounted}>
          <Image src={logo} alt="logo" width={300} height={300} />
          <h2 className="font-logo lg:text-7xl tracking-widest">SNEAKACE</h2>
          <p className="font-bannerHeading lg:text-[36px] tracking-widest text-center">
            TIE KNOTS WITH ROYALTY
          </p>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
