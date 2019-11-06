// ./src/components/AppRouter.js

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageHome from './PageHome'
import PageNotFound from './PageNotFound'
import PageThread from './PageThread'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/threads/:threadId" component={PageThread} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter