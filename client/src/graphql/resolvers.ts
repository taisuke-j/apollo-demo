import { ApolloClient, NormalizedCache } from '@apollo/client'

import { Article } from '../generated/graphql'
import { GET_LIKED_ARTICLES } from './queries'

export default {
  Article: {
    liked: (
      article: Article,
      _args: never,
      { cache }: ApolloClient<NormalizedCache>
    ) => {
      const { likedArticles } = cache.readQuery({
        query: GET_LIKED_ARTICLES,
      })
      return likedArticles.includes(article.id)
    },
  },
}
