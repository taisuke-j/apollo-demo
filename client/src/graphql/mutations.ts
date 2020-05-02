import gql from 'graphql-tag'

/**
 * Article
 */
export const CREATE_ARTICLE = gql`
  mutation createArticle($input: NewArticle!) {
    createArticle(input: $input) {
      id
      title
      body
      author {
        id
        name
      }
    }
  }
`

export const EDIT_ARTICLE = gql`
  mutation updateArticle($input: NewArticle!) {
    createArticle(input: $input) {
      id
      title
      body
      author {
        id
        name
      }
    }
  }
`

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: Int!) {
    deleteArticle(id: $id) {
      id
      title
      body
      author {
        id
        name
      }
    }
  }
`
