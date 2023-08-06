import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const showSocialIcons = true; // Set this to true to show the social icons

  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    // Add a scroll event listener to track the scroll position
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight;
      const scrollPosition = window.scrollY;

      // If the scroll position is below the hero section, hide the scroll icon
      setShowScrollIcon(scrollPosition < heroHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id='hero' className='text-white flex flex-col h-screen'>
      <div className='container mx-auto flex-grow flex flex-col justify-center items-center'>
        {/* Social Icons */}
        {showSocialIcons && (
          <div className='fixed right-6 bottom-6 flex gap-4'>
            <a href='https://github.com/daffaromero/visit-samigaluh'>
              <FaGithub color='#f1f5f9' size={22} />
            </a>
            <a href='https://www.instagram.com/kknsamigaluh'>
              <FaInstagram color='#f1f5f9' size={22} />
            </a>
          </div>
        )}

        {/* Hero Text */}
        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl nt-bold'>Samigaluh</h1>
          <p className='mt-4 text-lg md:text-xl'>
            Explore the Beauty of Samigaluh
          </p>
        </div>

        {/* Get Started Button */}
        <div className='mt-8'>
          <Link
            href='/Start'
            className='bg-slate-100 text-blue-800 py-3 px-8 rounded-full shadow-md text-lg hover:bg-opacity-80 transition-colors duration-300'
          >
            Get started
          </Link>
        </div>

        {/* Scroll Icon */}
        {showScrollIcon && (
          <div className='fixed bottom-12 animate-bounce'>
            <a
              href='#about'
              className='text-white font-bold uppercase flex items-center'
            >
              <img
                src='/arrow.png'
                alt='scroll'
                width={10}
                height={10}
                className='w-5 mr-1'
              />
              Scroll
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
