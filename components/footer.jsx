import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
      <footer
        id='contact'
        className='w-full flex flex-col gap-y-6 md:gap-y-2 bg-[#a9d9d9] pt-8 pb-2'
      >
        {/* upper */}
        <div className='flex flex-wrap gap-x-8 justify-center items-center px-4 lg:px-0 gap-y-6 lg:gap-y-10'>
          {/* main */}
          <div className='flex items-center px-4 md:px-0 xl:w-2/5 md:gap-x-10'>
            <Image
              src='/travel_mockup.png'
              alt='img'
              width={180}
              height={100}
              className='hover:scale-105 transition-all duration-300'
            />
            <div className='flex flex-col justify-center gap-y-4'>
              <div className='flex flex-col gap-y-2 text-slate-700'>
                <h4 className='text-lg md:text-xl font-bold'>
                  Visit Samigaluh
                </h4>
                <p className='text-sm lg:text-base max-w-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  libero, eveniet officia minima numquam at deleniti obcaecati
                  illo dolores architecto ratione quod nisi
                </p>
              </div>
              <div className='flex flex-col gap-y-2'>
                <Link
                  href=''
                  className='md:px-4 py-2 px-3 text-sm border border-slate-700 rounded-3xl flex items-center justify-center gap-x-2 max-w-sm font-semibold hover:bg-emerald-900 hover:text-slate-100'
                >
                  <FaInstagram size={20} /> KKN-PPM UGM Samigaluh 2023
                </Link>
              </div>
            </div>
          </div>
          {/* Link */}
          <div className='flex flex-col xl:w-2/5 gap-y-4 text-slate-700'>
            <h4 className='text-lg md:text-xl font-bold'>Important Link</h4>
            <div className='flex items-center gap-x-24 text-sm lg:text-base'>
              <ul>
                <li>
                  <a href=''>KKN-PPM UGM</a>
                </li>
                <li>
                  <a href=''>About Travel</a>
                </li>
                <li>
                  <a href=''>FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* mid */}
        <div className='mb-8 gap-y-4'>
          <div className='flex space-x-16'>
            <Link href='' className='text-xs'>
              &#169; KKN-PPM UGM Samigaluh 2023
            </Link>

            <div className='flex mr-auto'>
              <FaInstagram size={20} color='#334155' />
              <FaYoutube size={20} color='#334155' />
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
