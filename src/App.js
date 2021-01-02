import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import GlobalStyles from './globalStyles'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
}

export default App
