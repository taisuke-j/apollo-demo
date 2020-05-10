import { InMemoryCache } from '@apollo/client'

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        likedArticles: {
          read() {
            return [5]
          },
        },
      },
    },
  },
})

export default cache
