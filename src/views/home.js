import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div>
      <Helmet>
        <title>benchmark.</title>
        <meta property="og:title" content="benchmark." />
      </Helmet>
        <h1>Home</h1>
    </div>
  )
}

export default Home
