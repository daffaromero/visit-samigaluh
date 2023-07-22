import React from "react";
import { useRouter } from "next/router";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Post from "@/components/posts";

import { GET_POST_BY_SLUG } from "@/lib/query";
import { useQuery } from "@apollo/client";

const PostPage = () => {
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
    { label: post.title, href: `/posts/${post.slug}` },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-600'>
      <Header />
      <Post data={data} breadcrumbPaths={breadcrumbPaths} />
      <Footer />
    </div>
  );
};

export default PostPage;
