import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Home from './views/home'
import Likes from './views/likes'
import Page404 from './views/page'
import Params from './views/params'
import Add from './views/add'
import Layout from "./views/layout";

import { ThemeProvider } from "@mui/material";
 
import { Theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      
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
    
    </ThemeProvider>

    
  )
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
