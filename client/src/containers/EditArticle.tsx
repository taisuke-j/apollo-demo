import React from 'react'
import { useHistory } from 'react-router-dom'

import ArticleForm, { ArticleFormData } from '../components/ArticleForm'
import Loading from '../components/Loading'
import Error from '../components/Error'
import {
  useGetArticleQuery,
  useUpdateArticleMutation,
} from '../generated/graphql'
import { useParams } from 'react-router-dom'

const EditArticle: React.FC = () => {
  const { id } = useParams()
  const history = useHistory()

  const { data, loading, error } = useGetArticleQuery({
    fetchPolicy: 'cache-and-network',
    variables: { id },
  })
  const [
    updateArticle,
    { error: updateArticleError },
  ] = useUpdateArticleMutation()

  if (loading) {
    return <Loading />
  }

  if (error || updateArticleError) {
    return <Error error={error || updateArticleError} />
  }

  const defaultValues = {
    title: data.article.title,
    body: data.article.body,
  }

  const onSubmit = async (data: ArticleFormData) => {
    const input = { id, ...data }
    await updateArticle({
      variables: { input },
    })
    if (!updateArticleError) {
      history.push(`/articles/${id}`)
    }
  }

  return (
    <ArticleForm
      title="Edit Article"
      defaultValues={defaultValues}
      onSubmit={onSubmit}
    />
  )
}
export default EditArticle
