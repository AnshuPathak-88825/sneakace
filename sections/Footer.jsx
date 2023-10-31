import React from "react";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full bg-background p-3">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-26 py-5">
        <div className="flex flex-col items-center gap-3">
          <Image src={logo} alt="logo" className="w-[264px] h-[125px]" />
          <p className="lg:text-[100px] tracking-widest text-3xl lg:text-5xl font-normal">
            SNEAKACE
          </p>
          <p className="lg:tracking-[0.7rem] text-center text-secondary font-normal">
            THE KNOTS WITH ROYALTY
          </p>
          <div className="flex items-center justify-center">
            <p>Useful Links</p>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col items-center gap-3">
              <Link href="/">About Us</Link>
              <Link href="/">Store Location</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Order Info</Link>
              <Link href="/">Site Map</Link>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Link href="/">Returns</Link>
              <Link href="/">Support Policy</Link>
              <Link href="/">Size Guide</Link>
              <Link href="/">FAQ&apos;s</Link>
              <Link href="/">Email Unsubscribe</Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto bg-gray-500 rounded-2xl p-3 lg:w-[848px]">
          <div className="flex flex-col items-center justify-center gap-5 lg:gap-10">
            <h2>COMMUNITY EXCLUSIVE</h2>
            <p className="text-center font-normal ">
              Subscribe to our newsletter and be the first to get all inside
              information on the latest drops and special offers.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter the email"
                className="lg:w-[430px] outline-none bg-transparent border rounded-lg p-2"
              />
              <button className="p-2 border rounded-lg bg-secondary border-secondary hover:bg-transparent duration-150">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;