// components/gallery.jsx
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
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {images.map((image, index) => (
        <div key={index} className='relative aspect-w-4 aspect-h-3'>
          <motion.img
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            layout='fill'
            objectFit='cover'
            className='rounded-sm cursor-pointer'
            onClick={() => handleImageClick(image)}
            whileHover={{ scale: 1.1 }}
          />
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
