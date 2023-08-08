import React, { useState } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

import { GET_DESTINATIONS } from "@/lib/query";

const Destinations = () => {
  const { loading, error, data, associatedPost } = useQuery(GET_DESTINATIONS);
  const [expanded, setExpanded] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { nodes } = data?.destinations || {};

  const toggleDescription = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !prevExpanded[index];
      return newExpanded;
    });
  };

  return (
    <>
      <div className='min-h-[calc(100vh-16rem)] bg-gray-900 pt-32'>
        <div className='flex flex-wrap justify-center gap-0'>
          {nodes.map((node, index) => {
            const { desc, title, sourceimg, associatedPost } =
              node?.databaseFields || {};

            const containerVariants = {
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: index * 0.2,
                  duration: 0.5,
                },
              },
            };

            const isExpanded = expanded[index];

            return (
              <motion.div
                key={title}
                className='flex-1 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white shadow-xl overflow-hidden'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
              >
                <div className='flex-1 w-full relative'>
                  <img
                    src={sourceimg.sourceUrl}
                    alt={title}
                    className='object-cover w-full h-full'
                  />
                  <div
                    className={`${
                      isExpanded ? "h-full" : "h-0"
                    } absolute inset-0 bg-gradient-to-b from-transparent to-black transition-all duration-300`}
                  ></div>
                  <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4'>
                    <h2 className='text-3xl md:text-5xl font-bold mb-2 leading-tight uppercase'>
                      {title}
                    </h2>
                    <motion.p
                      className={`${
                        isExpanded ? "block" : "hidden"
                      } text-sm md:text-base`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {desc}
                    </motion.p>
                    <div className='flex items-center mt-4'>
                      <Link href={`/posts/${associatedPost?.slug}`} passHref>
                        <motion.button
                          className='bg-gray-800 px-4 py-2 rounded'
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Lebih Lanjut
                        </motion.button>
                      </Link>
                      <button
                        className='text-gray-400 hover:text-gray-200'
                        onClick={() => toggleDescription(index)}
                      >
                        {isExpanded ? (
                          <FaArrowCircleUp className='ml-4' size={20} />
                        ) : (
                          <FaArrowCircleDown className='ml-4' size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Destinations;
