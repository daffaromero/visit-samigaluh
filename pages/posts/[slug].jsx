import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_SLUG } from "@/lib/query";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Post from "@/components/posts";

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

  const featuredImage = post.featuredImage?.node?.sourceUrl;

  return (
    <div className='w-full'>
      {/* Photo Cover */}
      <div
        className='h-[200px] md:h-[250px] lg:h-[300px] xl:h-[300px] bg-cover bg-bottom'
        style={{
          backgroundImage: `url('${featuredImage}')`,
        }}
      ></div>

      {/* Header */}
      <Header />

      {/* Post Content */}
      <Post data={data} breadcrumbPaths={breadcrumbPaths} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PostPage;
