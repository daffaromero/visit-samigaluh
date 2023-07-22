import React from "react";
import Breadcrumb from "@/components/breadcrumbs";
import { GET_POST_BY_SLUG } from "@/lib/query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });
  const post = data.postBy;
  const { author, date, comments, featuredImage } = post;

  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: post.title, href: `/posts/${post.slug}` },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-600'>
      <div className='container mx-auto px-4 pb-8 pt-32'>
        <Breadcrumb paths={breadcrumbPaths} />
        <h1 className='text-4xl font-bold my-6'>{post.title}</h1>

        <div className='my-6'>
          {featuredImage && (
            <img
              className='w-full h-auto rounded-lg'
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText}
            />
          )}
          {featuredImage && featuredImage.node.caption && (
            <p className='mt-2 text-gray-600'>{featuredImage.node.caption}</p>
          )}
        </div>

        <div className='flex flex-wrap mb-6'>
          {post.categories.edges.map(({ node }) => (
            <span
              key={node.slug}
              className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
            >
              {node.name}
            </span>
          ))}
        </div>
        <div
          className='prose max-w-none'
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

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
