// components/imageModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({ src, alt, caption, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className='max-w-screen-lg bg-white rounded-lg p-8 shadow-lg flex flex-col'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='relative pb-2/3'>
            <img
              src={src}
              alt={alt}
              layout='fill'
              objectFit='contain'
              className='rounded-lg'
            />
          </div>
          <div className='mt-4'>
            <p className='text-gray-500'>{caption || alt}</p>
          </div>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
