import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

const Layout = ({ children, title_tag }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
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

      {isLoading && isHome && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {isHome && (
        <div className="flex flex-col min-h-screen">
          <>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </>
        </div>
      )}
      {isAdmin && (
        <div className="flex flex-col min-h-screen bg-white text-black">
          <>
            <main className="flex-grow">{children}</main>
          </>
        </div>
      )}
    </>
  );
};

export default Layout;
