// pages/gallery/[slug].jsx
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { GET_POST_BY_SLUG } from "@/lib/query";
import Gallery from "@/components/gallery";
import Breadcrumb from "@/components/breadcrumbs";
import Header from "@/components/header";
import Footer from "@/components/footer";

const GalleryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.postBy;
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: post.title, href: `/gallery/${post.slug}` },
  ];

  // console.log("data:", data); // Check the data object
  // console.log("postBy:", post); // Check the postBy object

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full min-h-screen bg-gray-600'
    >
      <Header />
      <div className='container mx-auto px-4 py-8 pt-32'>
        <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
        <Breadcrumb paths={breadcrumbPaths} />
        <div className='mt-8'>
          {" "}
          {/* Add some margin-top */}
          {post.content && <Gallery content={post.content} />}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default GalleryPage;
