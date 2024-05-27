import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      content
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      content
    }
  }
`;
