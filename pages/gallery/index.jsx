// pages/gallery/index.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/lib/query";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

const GalleryIndexPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  const [hoveredGallery, setHoveredGallery] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const galleries = data.posts.edges;

  return (
    <div>
      <Header />
      <div className='container mx-auto my-4 pt-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {galleries.map(({ node: gallery }) => {
            let imageUrl = "https://via.placeholder.com/768x1024";
            const imgMatch = gallery.content.match(/<img[^>]+src="([^">]+)/i);
            if (imgMatch) {
              imageUrl = imgMatch[1];
            }

            const isHovered = hoveredGallery === gallery.slug;

            return (
              <Link
                key={gallery.slug}
                href={`/gallery/${gallery.slug}`}
                className='relative block rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow'
                onMouseEnter={() => setHoveredGallery(gallery.slug)}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <div className='relative h-56'>
                  <img
                    src={imageUrl}
                    alt={gallery.title}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='absolute bottom-0 left-0 w-full p-4 text-white backdrop-blur-sm'>
                  <h3 className='text-xl font-bold mb-2'>{gallery.title}</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 10,
                      pointerEvents: isHovered ? "auto" : "none",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ display: isHovered ? "block" : "none" }}
                    dangerouslySetInnerHTML={{ __html: gallery.excerpt }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryIndexPage;
