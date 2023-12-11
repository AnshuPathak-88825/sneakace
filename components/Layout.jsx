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
  const [isLoading, setIsLoading] = useState(isHome);
  const isAdmin = pathname.startsWith("/admin");

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

      {isLoading && (isHome || isLogin || isProducts) && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {(isHome || isAdmin || isLogin || isProducts) && (
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
