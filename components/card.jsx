import React from "react";
import Link from "next/link";

const Card = ({ imageSrc, title, description, buttonText, buttonLink }) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          <img className='rounded-t-lg' src={imageSrc} alt='sidoharjo' />
          <Link
            href={buttonLink}
            className='font-display max-w-sm text-2xl font-bold leading-tight'
          >
            <span className='link link-underline link-underline-black text-white'>
              {title}
            </span>
          </Link>
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <Link href={buttonLink}>
          <button className='group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow'>
            <div class='absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
            <span class='relative text-black group-hover:text-white'>
              {buttonText}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
