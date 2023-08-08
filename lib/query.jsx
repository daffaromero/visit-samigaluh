import { gql } from "@apollo/client";

export const GET_POSTS_CAT = gql`
  query postsQuery($category: String!) {
    posts(where: { categoryName: $category }) {
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

export const GET_POSTS = gql`
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

export const GET_POST_BY_SLUG = gql`
  query postsQuery($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      excerpt
      content
      slug
      date
      author {
        node {
          email
          name
          username
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          comments {
            edges {
              node {
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
      comments {
        edges {
          node {
            id
            content
            author {
              node {
                id
              }
            }
            date
          }
        }
      }
    }
  }
`;

export const GET_DESTINATIONS = gql`
  query DestQuery {
    destinations {
      nodes {
        databaseFields {
          desc
          title
          fieldGroupName
          sourceimg {
            sourceUrl
          }
          associatedPost {
            ... on Post {
              id
              slug
            }
          }
        }
      }
    }
  }
`;

export const GET_DEST_BY_SLUG = gql`
  query DestQuery($slug: String!) {
    destinationBy(slug: $slug) {
      databaseFields {
        desc
      }
    }
  }
`;
