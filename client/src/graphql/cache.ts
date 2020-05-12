import { InMemoryCache } from '@apollo/client'

const cache: InMemoryCache = new InMemoryCache()

export const likedArticlesVar = cache.makeLocalVar<number[]>(
  localStorage.likedArticles ? JSON.parse(localStorage.likedArticles) : []
)

export default cache
