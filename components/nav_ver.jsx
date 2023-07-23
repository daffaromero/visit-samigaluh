import React from "react";
import Link from "next/link";

const NavVer = ({ title, reference, mobileMenuOpen }) => {
  // Define the custom paths for specific pages
  const customPaths = {
    home: "/",
    // Add more page names and their paths as needed
  };

  // Check if there's a custom path for the current page
  const hasCustomPath = customPaths.hasOwnProperty(reference);
  const href = hasCustomPath ? customPaths[reference] : `/${reference}`;

  return (
    <li
      className={`group ${
        mobileMenuOpen
          ? "opacity-100 transition-opacity duration-300"
          : "opacity-0 invisible"
      }`}
    >
      <Link
        href={href}
        className={`block px-4 py-2 text-sm font-medium rounded-md ${
          mobileMenuOpen ? "text-gray-900" : "text-gray-600"
        } hover:text-gray-900 bg-slate-100 hover:bg-slate-200 transition-all duration-200 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-2"
        }`}
        style={{
          boxShadow: mobileMenuOpen ? "0 1px 2px rgba(0, 0, 0, 0.15)" : "none",
        }}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavVer;
