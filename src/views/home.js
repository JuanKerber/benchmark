import React from 'react'

import { Helmet } from 'react-helmet'

import Topbar from '../components/topbar'
import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>benchmark.</title>
        <meta property="og:title" content="benchmark." />
      </Helmet>
      <Topbar rootClassName="topbar-root-class-name"></Topbar>
      <div className="general-div">
        <h1>Home</h1>
      </div>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
    </div>
  )
}

export default Home
