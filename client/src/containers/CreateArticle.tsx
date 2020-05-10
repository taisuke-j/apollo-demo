import React from 'react'
import { useHistory } from 'react-router-dom'

import ArticleForm, { ArticleFormData } from '../components/ArticleForm'
import Error from '../components/Error'
import { useCreateArticleMutation } from '../generated/graphql'

const CreateArticle: React.FC = () => {
  const history = useHistory()
  const [createArticle, { error }] = useCreateArticleMutation()

  if (error) {
    return <Error error={error} />
  }

  const onSubmit = async (data: ArticleFormData) => {
    const input = { authorID: 1, ...data }
    await createArticle({
      variables: { input },
    })
    if (!error) {
      history.push('/')
    }
  }

  return <ArticleForm title="New Article" onSubmit={onSubmit} />
}
export default CreateArticle
