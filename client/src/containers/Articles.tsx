import React from 'react'

import ArticleList from '../components/ArticleList'
import { useGetArticlesQuery } from '../generated/graphql'

const Articles = () => {
  const { data } = useGetArticlesQuery()
  console.log('data', data)

  return <ArticleList />
}
export default Articles
