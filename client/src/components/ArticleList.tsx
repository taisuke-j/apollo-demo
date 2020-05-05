import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { GetArticlesQuery } from '../generated/graphql'

export interface ArticleListProps {
  articles: GetArticlesQuery['articles']
}

const ArticleTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 22px;
  a {
    color: #333;
  }
`
const ArticlePanel = styled.div`
  display: flex;
`
const ArticlePanelItem = styled.div`
  margin-right: 30px;
  font-size: 16px;
  color: #999;
  a {
    text-decoration: none;
    color: #999;
  }
`

const ArticleListItem = styled.div`
  margin-bottom: 40px;
`

const ArticleList: React.FC<ArticleListProps> = ({
  articles,
}: ArticleListProps) => (
  <>
    {articles.map((article) => (
      <ArticleListItem key={article.id}>
        <ArticleTitle>
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </ArticleTitle>
        <ArticlePanel>
          <ArticlePanelItem>Author: {article.author.name}</ArticlePanelItem>
          <ArticlePanelItem>
            Posted on: {dayjs(article.createdAt).format('MMMM D')}
          </ArticlePanelItem>
          <ArticlePanelItem>
            <Link to={`/articles/edit/${article.id}`}>
              <FontAwesomeIcon
                icon={['fas', 'edit']}
                style={{ marginRight: '5px' }}
              />
              Edit
            </Link>
          </ArticlePanelItem>
          <ArticlePanelItem>
            <FontAwesomeIcon
              icon={['fas', 'trash-alt']}
              style={{ marginRight: '5px' }}
            />
            Delete
          </ArticlePanelItem>
        </ArticlePanel>
      </ArticleListItem>
    ))}
  </>
)
export default ArticleList
