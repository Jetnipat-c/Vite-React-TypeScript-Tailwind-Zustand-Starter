import React from 'react'
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary'
import { Route, Router, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

import { Home } from './views/Homepage'
import Notfound from './views/Notfound'

const browserHistory = createBrowserHistory()

const App = () => {
  return (
    <ErrorBoundary>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*" component={Notfound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}

export default App
