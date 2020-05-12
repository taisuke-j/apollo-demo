import { likedArticlesVar } from './cache'
import { Article } from '../generated/graphql'

/**
 * Local Resolvers
 */

export default {
  Article: {
    liked: (article: Article) => {
      const likedArticleIds = likedArticlesVar()
      return likedArticleIds.includes(article.id)
    },
  },
}
