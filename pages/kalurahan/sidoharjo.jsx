import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumbs";
import { GET_POSTS_CAT } from "@/lib/query";

export default function SidoharjoPage() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_POSTS_CAT, {
    pollInterval: 500,
    variables: { category: "Sidoharjo" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Sidoharjo", href: router.asPath },
  ];

  const posts = data.posts.edges;

  return (
    <div className='container mx-auto px-4'>
      <Breadcrumb paths={breadcrumbPaths} />

      <h1 className='text-4xl font-bold my-6'>Posts in Sidoharjo</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {posts.map(({ node }) => (
          <div
            key={node.slug}
            className='bg-white shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'
          >
            <h2 className='text-xl font-bold mb-2 text-black'>{node.title}</h2>
            <p
              className='text-gray-600'
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            ></p>
            <Link
              href={`/posts/${node.slug}`}
              className='text-blue-500 hover:text-blue-700'
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
