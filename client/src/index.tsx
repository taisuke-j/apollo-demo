import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faSpinner,
  faPlus,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import cache from './graphql/cache'
import resolvers from './graphql/resolvers'

import Article from './containers/Article'
import Articles from './containers/Articles'
import CreateArticle from './containers/CreateArticle'
import EditArticle from './containers/EditArticle'
import Screen from './components/Screen'

export const client = new ApolloClient({
  cache,
  resolvers,
  uri: 'http://localhost:4000/query',
  connectToDevTools: true,
})

const history = createBrowserHistory()

library.add(faHeart, faSpinner, faPlus, faEdit, faTrashAlt)

render(
  <Router history={history}>
    <ApolloProvider client={client}>
      <Screen>
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route exact path="/articles/create" component={CreateArticle} />
          <Route exact path="/articles/edit/:id" component={EditArticle} />
          <Route exact path="/articles/:id" component={Article} />
        </Switch>
      </Screen>
    </ApolloProvider>
  </Router>,
  document.getElementById('app')
)
