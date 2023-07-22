import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Picard = ({ src, title, desc, associatedPost }) => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-y-3 snap-center px-2'>
      <div className='group rounded-md overflow-hidden relative shadow-lg'>
        {associatedPost && associatedPost.slug ? (
          <Link href={`/posts/${associatedPost.slug}`} passHref>
            <img
              src={src}
              alt={`${title} picture`}
              width={808}
              height={632}
              layout='responsive'
              className='group-hover:scale-110 group-hover:brightness-75 transition-all duration-300'
              style={{ maxWidth: "300%", height: "632px", cursor: "pointer" }}
            />
          </Link>
        ) : (
          <img
            src={src}
            alt={`${title} picture`}
            width={808}
            height={632}
            layout='responsive'
            className='group-hover:scale-110 group-hover:brightness-75 transition-all duration-300'
            style={{ maxWidth: "300%", height: "632px" }}
          />
        )}
      </div>
      <div className='flex flex-col text-gray-800'>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-xs'>{desc}</p>
      </div>
    </div>
  );
};

export default Picard;
