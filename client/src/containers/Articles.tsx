import React from 'react'

import ArticleList from '../components/ArticleList'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useGetArticlesQuery } from '../generated/graphql'

const Articles: React.FC = () => {
  const { data, loading, error } = useGetArticlesQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error} />
  }

  return <ArticleList articles={data.articles} />
}
export default Articles
