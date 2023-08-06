import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ imageSrc, title, description, buttonText, buttonLink }) => {
  return (
    <div className='max-w-sm bg-white rounded-sm shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='relative h-56'>
        <Image
          src={imageSrc}
          layout='fill'
          objectFit='cover'
          className='rounded-t-sm'
        />
      </div>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <Link href={buttonLink}>
          <button className='group relative h-12 w-48 overflow-hidden rounded-md bg-white text-lg shadow'>
            <span className='absolute inset-0 w-3 bg-gray-100 transition-all duration-300 ease-out group-hover:w-full'></span>
            <span className='relative text-black'>{buttonText}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
