import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Navdata } from "@/constants/Data";
import NavHor from "./nav_hor";
import NavVer from "./nav_ver";

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarDark = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 80) {
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 80) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarDark);
    return () => {
      window.removeEventListener("scroll", navbarDark);
    };
  }, []);

  return (
    <div
      className={`order-3 lg:px-0 lg:order-2 w-1/4 lg:w-fit ${
        dark ? "bg-slate-100" : "bg-transparent"
      }`}
    >
      <div className='flex justify-end pr-6 lmd:pr-14 w-full'>
        <button
          className={`lg:hidden rounded-full transition-transform duration-300 ${
            toggle ? "rotate-0" : "rotate-90"
          }`}
          onClick={() => {
            setToggle(!toggle);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <HiOutlineMenu color={dark ? "#334155" : "#f3f4f6"} size={30} />
        </button>
      </div>

      <nav
        id='nav-menu-mobile'
        className={`lg:hidden absolute top-[4.5rem] right-4 py-[0.6rem] px-3 bg-slate-100 rounded-md ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-300`}
      >
        <ul className='flex flex-col gap-2 pr-2 text-gray-800'>
          {Navdata.map((item) => (
            <div key={item.reference}>
              <NavVer
                title={item.title}
                reference={item.reference}
                mobileMenuOpen={mobileMenuOpen}
              />
            </div>
          ))}
        </ul>
      </nav>

      <nav
        id='nav-menu'
        className={`hidden lg:block ${
          dark ? "bg-slate-100" : "bg-transparent"
        }`}
      >
        <ul className='flex text-gray-800'>
          {Navdata.map((item) => (
            <div key={item.reference}>
              <NavHor title={item.title} reference={item.reference} />
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
