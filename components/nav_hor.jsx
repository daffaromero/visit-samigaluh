import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavHor = ({ title, reference }) => {
  const [dark, setDark] = useState(false);

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

  // Define the custom paths for specific pages
  const customPaths = {
    home: "/",
    // Add more page names and their paths as needed
  };

  // Check if there's a custom path for the current page
  const hasCustomPath = customPaths.hasOwnProperty(reference);
  const href = hasCustomPath ? customPaths[reference] : `/${reference}`;

  return (
    <li className='group'>
      <Link
        href={href}
        className={`px-3 mx-2 py-1 xl:mx-3 hover:text-opacity-80 ${
          dark ? "text-gray-700" : "text-gray-100"
        } transition-colors duration-300`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavHor;
