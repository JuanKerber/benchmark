import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Likes from './views/likes'
import Page404 from './views/page'
import Params from './views/params'
import Add from './views/add'
import Layout from "./views/layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/benchmark/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route element={<Likes/>} path="/benchmark/likes" />
          <Route element={<Page404/>} path="*" />
          <Route element={<Params/>} path="/benchmark/params" />
          <Route element={<Add/>} path="/benchmark/add" />
        </Route>
      </Routes>
    </Router>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
