import React from 'react'
import { useParams } from 'react-router-dom'

import ArticleDetails from '../components/ArticleDetails'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useGetArticleQuery } from '../generated/graphql'

const Article: React.FC = () => {
  const { id } = useParams()
  const { data, loading, error } = useGetArticleQuery({ variables: { id } })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error} />
  }

  return <ArticleDetails article={data.article} />
}
export default Article
