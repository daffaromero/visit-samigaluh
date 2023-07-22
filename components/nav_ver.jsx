import React from "react";
import Link from "next/link";
import { IoCaretUpOutline } from "react-icons/io5";

const NavHor = ({ title, reference }) => {
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
        className='px-2 text-[.95rem] hover:text-opacity-60 text-gray-100'
      >
        {title}
      </Link>
    </li>
  );
};

export default NavHor;
