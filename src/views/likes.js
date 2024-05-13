import React from 'react'

import { Helmet } from 'react-helmet'

import Topbar from '../components/topbar'
import Navbar from '../components/navbar'
import './likes.css'

const Likes = (props) => {
  return (
    <div className="likes-container">
      <Helmet>
        <title>Likes - benchmark.</title>
        <meta property="og:title" content="Likes - benchmark." />
      </Helmet>
      <Topbar></Topbar>
      <div className="general-div">
        <h1>likes</h1>
      </div>
      <Navbar></Navbar>
    </div>
  )
}

export default Likes
