import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Likes from './views/likes'
import Page from './views/page'
import Params from './views/params'
import Add from './views/add'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Likes} exact path="/likes" />
        <Route component={Page} path="**" />
        <Route component={Params} exact path="/params" />
        <Route component={Add} exact path="/add" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
