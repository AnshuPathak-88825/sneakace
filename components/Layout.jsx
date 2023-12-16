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
  const isMyAccount = pathname === "/my_account";
  const isRegister = pathname === "/register"; // New line for register page
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

      {isLoading && (isHome || isLogin || isProducts || isAdmin || isCart || isMyAccount || isRegister) && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {(isHome || isAdmin || isLogin || isProducts || isCart || isMyAccount || isRegister) && (
        <div className="flex flex-col min-h-screen">
          {isHome && <Navbar />}
          <main className="flex-grow">{children}</main>
          {isHome && <Footer />}
        </div>
      )}
    </>
  );
};

export default Layout;
