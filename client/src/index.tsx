import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

import Article from './containers/Article'
import Articles from './containers/Articles'
import CreateArticle from './containers/CreateArticle'
import EditArticle from './containers/EditArticle'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/query',
  connectToDevTools: true,
})

const history = createBrowserHistory()

render(
  <Router history={history}>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles/create" component={CreateArticle} />
        <Route exact path="/articles/edit/:id" component={EditArticle} />
        <Route exact path="/articles/:id" component={Article} />
      </Switch>
    </ApolloProvider>
  </Router>,
  document.getElementById('app')
)
