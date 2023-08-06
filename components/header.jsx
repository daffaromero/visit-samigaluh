import React, { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Link from "next/link";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  const navbarVisible = () => {
    if (
      window.scrollY > 10 &&
      window.scrollY < window.innerHeight - (window.innerHeight - 1)
    ) {
      setVisible(true);
      setDark(false);
    } else if (
      window.scrollY >=
      window.innerHeight - (window.innerHeight - 1)
    ) {
      setDark(true);
      setVisible(false);
    } else {
      setVisible(false);
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarVisible);
    return () => {
      window.removeEventListener("scroll", navbarVisible);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center z-50 ${
        visible ? "fixed bg-transparent backdrop-blur-sm" : ""
      } ${dark ? "fixed bg-slate-100 shadow-md" : ""}`}
    >
      <div id='navbar' className='w-full 2xl:container mx-auto relative'>
        <div
          className={`flex items-center justify-between relative transition-all duration-300 ${
            dark ? "min-h-[4.5rem]" : " min-h-[5rem] md:min-h-[7rem]"
          }`}
        >
          {/* Logo */}
          <div className='flex items-center gap-x-4 order-1 w-16 md:w-20 lg:w-40 xl:w-32 box-border pl-6 lmd:pl-14 lg:pl-24 2xl:pl-16'>
            <Link href='/'>
              <img src='/logo-w.png' />
            </Link>
          </div>
          {/* navigation */}
          <Nav />
          {/* login & register */}
          <div className='order-2 lg:order-3 w-full flex items-center gap-x-2 lg:justify-end md:w-40'>
            <p
              className={`w-full text-center uppercase xs:inline xs:text-sm sm:text-base tracking-widest ${
                dark ? "text-gray-700 border-gray-700" : "text-gray-100"
              }`}
            >
              SIDOHARJO
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
