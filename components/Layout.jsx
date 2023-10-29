import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
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

      <div className="flex flex-col min-h-screen">
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
 