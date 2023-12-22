import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";

import logo from "../public/assets/images/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const menuList = [
    { label: "Shop", path: "/shop" },
    { label: "Collection", path: "/collection" },
    { label: "Pages", path: "/pages" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];
  const [nav, setNav] = useState(false);
  const [usr, setUsr] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // console.log(user);
    const timeout = setTimeout(() => setIsMounted(true), 3500);
    return () => clearTimeout(timeout); // Set isMounted to true when component is mounted
  }, []);

  // Logout functions
  const { user, logOut } = UserAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <div
        className={`${
          isMounted ? "translate-y-0" : "translate-y-[-5rem]"
        } transition-all duration-1000 ease-in-out fixed top-0 left-0 right-0 z-10`}
      >
        <div className="w-full bg-gradient-to-r from-background via-secondary/80 to-background h-20 sticky top-0 z-[999]">
          <div className="container mx-auto flex items-center justify-between w-full h-full px-4 lg:px-16">
            <Link href="/">
              <div className="flex items-center gap-3 ">
                <Image src={logo} alt="logo" width={100} height={100} />
                <h1 className="hidden relative top-2 lg:block font-bold">
                  SNEAKACE
                </h1>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              <div className="rounded-full   border p-2 cursor-pointer">
                <Link href="/wishlist">
                  <FaRegHeart size={30} />
                </Link>
              </div>
              <div className="rounded-full border p-2 cursor-pointer">
                <Link href="/cart">
                  <FaShoppingCart size={30} />
                </Link>
              </div>
              <div className="rounded-full border p-2 cursor-pointer">
                <BsFillPersonFill size={30} />
              </div>
              <div className="rounded-full border p-2 cursor-pointer hover:bg-secondary/50 duration-300">
                {user ? (
                  <Link href="/login" onClick={handleLogOut}>
                    <button className="w-[120px] text-xl">Logout</button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <button className="w-[120px] text-xl">Login</button>
                  </Link>
                )}
              </div>
            </div>
            <div
              className="flex lg:hidden rounded-full border p-2"
              onClick={handleChange}
            >
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div
              className={
                nav
                  ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
              }
            >
              <Link href="/" onClick={handleChange}>
                <h2 className="text-primary">SNEAKACE</h2>
              </Link>
              <div className="flex flex-col items-center justify-center w-full h-full gap-14">
                {menuList.map((menu, index) => (
                  <ul
                    key={index}
                    className="text-xl text-primary"
                    onClick={handleChange}
                  >
                    <Link
                      href={menu.path}
                      className="hover:text-secondary duration-200"
                    >
                      <li>{menu.label}</li>
                    </Link>
                  </ul>
                ))}
                {user ? (
                  <Link href="/login" onClick={handleLogOut}>
                    <button className="p-3 text-lg w-[108px] border border-primary rounded-lg text-primary hover:bg-background hover:text-primary duration-200 ease-in-out">
                      logout
                    </button>
                  </Link>
                ) : (
                  <Link href="/login" onClick={handleChange}>
                    <button className="p-3 text-lg w-[108px] border border-primary rounded-lg text-primary hover:bg-background hover:text-primary duration-200 ease-in-out">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
