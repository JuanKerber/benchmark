import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes
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
      <Routes>
        <Route element={<Home/>} exact path="/" />
        <Route element={<Likes/>} exact path="/likes" />
        <Route element={<Page/>} path="*/*" />
        <Route element={<Params/>} exact path="/params" />
        <Route element={<Add/>} exact path="/add" />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
