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
  const isAdmin = pathname ? pathname.startsWith("/admin") : false; // Add null check here
  const isCart = pathname === "/cart";
  const isCheckout = pathname === "/checkout";

  const isWishlist = pathname === "/wishlist";

  const isMyAccount = pathname === "/my_account";
  const isRegister = pathname === "/register";
  const isForget_Password=pathname==="/forget-password"
  const isProductDetails = pathname ? pathname.startsWith("/products/") : false; // Add null check here
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

      {isLoading && (isHome || isLogin||isForget_Password || isProducts || isAdmin || isCart || isWishlist || isMyAccount || isRegister || isCheckout || isProductDetails) && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {(isHome || isAdmin || isLogin || isProducts||isForget_Password || isCart || isCheckout || isWishlist || isMyAccount || isRegister || isProductDetails) && (
        <div className="flex flex-col min-h-screen">
          {(isHome || isWishlist || isCheckout || isCart ||isProducts) && <Navbar />}
          <main className="flex-grow">{children}</main>
          {(isHome || isWishlist || isCheckout || isCart ||isProducts) && <Footer />}
        </div>
      )}
    </>
  );
};

export default Layout;
