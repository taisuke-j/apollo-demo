import { gql } from '@apollo/client'

/**
 * Article
 */
export const CREATE_ARTICLE = gql`
  mutation createArticle($input: NewArticle!) {
    createArticle(input: $input) {
      id
      title
      body
      createdAt
    }
  }
`

export const EDIT_ARTICLE = gql`
  mutation updateArticle($input: EditArticle!) {
    updateArticle(input: $input) {
      id
      title
      body
    }
  }
`

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: Int!) {
    deleteArticle(id: $id) {
      id
      title
    }
  }
`
