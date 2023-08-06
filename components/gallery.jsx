import React, { useState } from "react";
import ImageModal from "./modal";
import { motion } from "framer-motion";

const Gallery = ({ content }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const images = Array.from(doc.querySelectorAll("img")).map((img) => ({
    src: img.getAttribute("src"),
    alt: img.getAttribute("alt"),
    caption: img.getAttribute("caption"),
  }));

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {/* Increased the gap value to add extra gaps between images */}
      
      {images.map((image, index) => (
        <div
          key={index}
          className='relative group cursor-pointer after:content after:group after:cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight'
          onClick={() => handleImageClick(image)}
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className='rounded-lg w-full h-full object-cover'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className='absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-50 transition-opacity'
            initial={false}
            animate={{ height: "100%", width: "100%" }}
            style={{ overflow: "hidden" }}
          ></motion.div>
        </div>
      ))}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          caption={selectedImage.caption}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Gallery;
