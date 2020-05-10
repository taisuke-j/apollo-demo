import React from 'react'

import ArticleList from '../components/ArticleList'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { GET_ARTICLES } from '../graphql/queries'
import {
  Article,
  useGetArticlesQuery,
  useDeleteArticleMutation,
} from '../generated/graphql'

const Articles: React.FC = () => {
  const { data, loading, error } = useGetArticlesQuery({
    fetchPolicy: 'cache-and-network',
  })
  const [
    deleteArticle,
    { error: deleteArticleError },
  ] = useDeleteArticleMutation()

  if (loading) {
    return <Loading />
  }

  if (error || deleteArticleError) {
    return <Error error={error || deleteArticleError} />
  }

  const onDelete = async (id: number) => {
    if (window.confirm('Are you sure to delete this article?')) {
      await deleteArticle({
        variables: { id },
        update: (cache) => {
          // TODO: To be replace by cache.modify and
          const { articles } = cache.readQuery({
            query: GET_ARTICLES,
          })
          cache.writeQuery({
            query: GET_ARTICLES,
            data: {
              articles: articles.filter(
                (article: Article) => article.id !== id
              ),
            },
          })
        },
      })
    }
  }

  return <ArticleList articles={data.articles} onDelete={onDelete} />
}
export default Articles
