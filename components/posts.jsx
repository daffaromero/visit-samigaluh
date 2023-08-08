import React from "react";
import Breadcrumb from "@/components/breadcrumbs";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { GET_POST_BY_SLUG, GET_DEST_BY_SLUG } from "@/lib/query";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    loading: postLoading,
    error: postError,
    data: postData,
  } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  const {
    loading: destinationsLoading,
    error: destinationsError,
    data: destinationsData,
  } = useQuery(GET_DEST_BY_SLUG, {
    variables: { slug },
  });

  if (postLoading || destinationsLoading) return <div>Loading...</div>;
  if (postError || destinationsError)
    return <div>Error: {postError?.message || destinationsError?.message}</div>;

  const post = postData.postBy;
  const { author, date, comments, featuredImage } = post;

  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: post.title, href: `/posts/${post.slug}` },
  ];

  const destination = destinationsData.destinationBy;

  return (
    <div className='py-10 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <Breadcrumb paths={breadcrumbPaths} />
        <h1 className='text-4xl font-bold text-center mb-6'>{post.title}</h1>

        <div className='flex justify-center'>
          {post.categories.edges.map(({ node }) => (
            <span
              key={node.slug}
              className='bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'
            >
              {node.name}
            </span>
          ))}
        </div>

        <div className='prose max-w-none mt-8 text-gray-800'>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <p>{destination?.databaseFields?.desc}</p>
        </div>

        <div className='mt-8 border-t border-gray-300 pt-8'>
          <h3 className='text-lg font-semibold'>Author: {author.node.name}</h3>
          <p className='text-gray-600'>Date: {date}</p>
        </div>

        <div className='mt-8'>
          <h3 className='text-lg font-semibold'>Comments</h3>
          {comments.edges.map(({ node }) => (
            <div key={node.id} className='mt-4 border-t border-gray-300 pt-4'>
              <p className='text-gray-600'>Author: {node.author.node.name}</p>
              <p className='text-gray-600'>Date: {node.date}</p>
              <div
                className='prose mt-2'
                dangerouslySetInnerHTML={{ __html: node.content }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
