import React from "react";
import Link from "next/link";

const Card = ({ title, file }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105'>
      <Link href={`/files/${encodeURIComponent(file)}`}>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
