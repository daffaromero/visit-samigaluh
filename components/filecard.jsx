import React from "react";
import Link from "next/link";

const Card = ({ title, file, description }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105'>
      <Link href={`/files/${encodeURIComponent(file)}`}>
        <div className='mb-4'>
          <h3 className='text-2xl font-bold mb-2'>{title}</h3>
          <p className='text-gray-600'>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
