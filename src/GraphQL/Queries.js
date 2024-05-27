import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  query {
    posts {
      id
      content
      createdAt
      author {
        id
        username
      }
      comments {
        id
        content
        createdAt
        author {
          id
          username
        }
      }
    }
  }
`;
