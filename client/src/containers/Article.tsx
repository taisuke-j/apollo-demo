import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import ArticleDetails from '../components/ArticleDetails'
import Loading from '../components/Loading'
import Error from '../components/Error'
import {
  useGetArticleQuery,
  useDeleteArticleMutation,
} from '../generated/graphql'

const Article: React.FC = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data, loading, error } = useGetArticleQuery({
    fetchPolicy: 'cache-and-network',
    variables: { id },
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
      })
      if (!deleteArticleError) {
        history.push('/')
      }
    }
  }

  return <ArticleDetails article={data.article} onDelete={onDelete} />
}
export default Article
