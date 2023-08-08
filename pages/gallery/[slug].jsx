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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-emerald-900'
    >
      <Header />

      <div className='container mx-auto px-4 py-12 pt-24'>
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-8'>
          {post.title}
        </h1>
        <Breadcrumb paths={breadcrumbPaths} />

        <div className='mt-8 mx-auto max-w-screen-lg'>
          {post.content && <Gallery content={post.content} />}
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default GalleryPage;
