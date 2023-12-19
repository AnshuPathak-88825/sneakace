// components/Layout.js
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

const Layout = ({ children, title_tag }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLogin = pathname === "/login";
  const isProducts = pathname === "/products";
  const isAdmin = pathname.startsWith("/admin");
  const isCart = pathname === "/cart";
  const isCheckout = pathname === "/checkout";

  const isWishlist = pathname === "/wishlist";

  const isMyAccount = pathname === "/my_account";
  const isRegister = pathname === "/register";
  const isProductDetails = pathname.startsWith("/products/"); // Check for dynamic route
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <>
      <Head>
        <title>Sneakace</title>
      </Head>

      {isLoading && (isHome || isLogin || isProducts || isAdmin || isCart|| isWishlist || isMyAccount || isRegister || isCheckout || isProductDetails) && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {(isHome || isAdmin || isLogin || isProducts || isCart || isCheckout || isWishlist || isMyAccount || isRegister || isProductDetails) && (
        <div className="flex flex-col min-h-screen">
          {(isHome || isWishlist || isCheckout || isCart) && <Navbar />}
          <main className="flex-grow">{children}</main>
          {(isHome || isWishlist|| isCheckout || isCart) && <Footer />}
        </div>
      )}
    </>
  );
};

export default Layout;
