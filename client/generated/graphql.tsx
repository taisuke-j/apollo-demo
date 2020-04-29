import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Time: any
}

export type Article = {
  __typename?: 'Article'
  id: Scalars['Int']
  title: Scalars['String']
  body: Scalars['String']
  authorID: Scalars['Int']
  author: Author
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
}

export type Author = {
  __typename?: 'Author'
  id: Scalars['Int']
  name: Scalars['String']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
}

export type Query = {
  __typename?: 'Query'
  articles: Array<Article>
  article: Article
  authors: Array<Author>
  author: Author
}

export type QueryArticleArgs = {
  id: Scalars['Int']
}

export type QueryAuthorArgs = {
  id: Scalars['Int']
}

export type NewArticle = {
  title: Scalars['String']
  body: Scalars['String']
  authorID: Scalars['Int']
}

export type NewAuthor = {
  name: Scalars['String']
}

export type EditArticle = {
  id: Scalars['Int']
  title: Scalars['String']
  body: Scalars['String']
}

export type EditAuthor = {
  id: Scalars['Int']
  name: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createArticle: Article
  updateArticle: Article
  deleteArticle: Article
  createAuthor: Author
  updateAuthor: Author
  deleteAuthor: Author
}

export type MutationCreateArticleArgs = {
  input: NewArticle
}

export type MutationUpdateArticleArgs = {
  input: EditArticle
}

export type MutationDeleteArticleArgs = {
  id: Scalars['Int']
}

export type MutationCreateAuthorArgs = {
  input: NewAuthor
}

export type MutationUpdateAuthorArgs = {
  input: EditAuthor
}

export type MutationDeleteAuthorArgs = {
  id: Scalars['Int']
}

export type GetAuthorsQueryVariables = {}

export type GetAuthorsQuery = { __typename?: 'Query' } & {
  authors: Array<{ __typename?: 'Author' } & Pick<Author, 'id' | 'name'>>
}

export type GetAuthorQueryVariables = {
  id: Scalars['Int']
}

export type GetAuthorQuery = { __typename?: 'Query' } & {
  author: { __typename?: 'Author' } & Pick<Author, 'id' | 'name'>
}

export type GetArticlesQueryVariables = {}

export type GetArticlesQuery = { __typename?: 'Query' } & {
  articles: Array<
    { __typename?: 'Article' } & Pick<Article, 'id' | 'title' | 'body'> & {
        author: { __typename?: 'Author' } & Pick<Author, 'id' | 'name'>
      }
  >
}

export type GetArticleQueryVariables = {
  id: Scalars['Int']
}

export type GetArticleQuery = { __typename?: 'Query' } & {
  article: { __typename?: 'Article' } & Pick<
    Article,
    'id' | 'title' | 'body'
  > & { author: { __typename?: 'Author' } & Pick<Author, 'id' | 'name'> }
}

export const GetAuthorsDocument = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetAuthorsQuery,
    GetAuthorsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(
    GetAuthorsDocument,
    baseOptions
  )
}
export function useGetAuthorsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAuthorsQuery,
    GetAuthorsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetAuthorsQuery,
    GetAuthorsQueryVariables
  >(GetAuthorsDocument, baseOptions)
}
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>
export type GetAuthorsLazyQueryHookResult = ReturnType<
  typeof useGetAuthorsLazyQuery
>
export type GetAuthorsQueryResult = ApolloReactCommon.QueryResult<
  GetAuthorsQuery,
  GetAuthorsQueryVariables
>
export const GetAuthorDocument = gql`
  query getAuthor($id: Int!) {
    author(id: $id) {
      id
      name
    }
  }
`

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAuthorQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetAuthorQuery,
    GetAuthorQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetAuthorQuery, GetAuthorQueryVariables>(
    GetAuthorDocument,
    baseOptions
  )
}
export function useGetAuthorLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAuthorQuery,
    GetAuthorQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetAuthorQuery, GetAuthorQueryVariables>(
    GetAuthorDocument,
    baseOptions
  )
}
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>
export type GetAuthorLazyQueryHookResult = ReturnType<
  typeof useGetAuthorLazyQuery
>
export type GetAuthorQueryResult = ApolloReactCommon.QueryResult<
  GetAuthorQuery,
  GetAuthorQueryVariables
>
export const GetArticlesDocument = gql`
  query getArticles {
    articles {
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

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticlesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(
    GetArticlesDocument,
    baseOptions
  )
}
export function useGetArticlesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >(GetArticlesDocument, baseOptions)
}
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>
export type GetArticlesLazyQueryHookResult = ReturnType<
  typeof useGetArticlesLazyQuery
>
export type GetArticlesQueryResult = ApolloReactCommon.QueryResult<
  GetArticlesQuery,
  GetArticlesQueryVariables
>
export const GetArticleDocument = gql`
  query getArticle($id: Int!) {
    article(id: $id) {
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

/**
 * __useGetArticleQuery__
 *
 * To run a query within a React component, call `useGetArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetArticleQuery,
    GetArticleQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetArticleQuery, GetArticleQueryVariables>(
    GetArticleDocument,
    baseOptions
  )
}
export function useGetArticleLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetArticleQuery,
    GetArticleQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetArticleQuery,
    GetArticleQueryVariables
  >(GetArticleDocument, baseOptions)
}
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>
export type GetArticleLazyQueryHookResult = ReturnType<
  typeof useGetArticleLazyQuery
>
export type GetArticleQueryResult = ApolloReactCommon.QueryResult<
  GetArticleQuery,
  GetArticleQueryVariables
>
