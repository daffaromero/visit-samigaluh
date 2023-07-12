import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import PostItem from "./postitem";

const GET_POSTS = gql`
  query postsQuery {
    posts {
      edges {
        node {
          title
          categories {
            edges {
              node {
                name
              }
            }
          }
          excerpt
          slug
          content
        }
      }
    }
  }
`;

export default function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS, { pollInterval: 500 });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { edges } = data.posts;

  return (
    <div className='container mx-auto bg-slate-800'>
      {edges.map(({ node }) => (
        <div
          className='flex items-center justify-center h-screen'
          key={node.slug}
        >
          <PostItem
            title={node.title}
            categories={node.categories.edges.map(({ node }) => node.name)}
            content={node.content}
            excerpt={node.excerpt}
          />
        </div>
      ))}
    </div>
  );
}
