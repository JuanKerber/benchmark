import React from 'react'

import { Helmet } from 'react-helmet'

import './likes.css'




const Likes = (props) => {
  return (
    <div>
      <Helmet>
        <title>Likes - benchmark.</title>
        <meta property="og:title" content="Likes - benchmark." />
      </Helmet>
        <h1>likes</h1>
    </div>
  )
}

export default Likes
