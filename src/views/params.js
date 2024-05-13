import React from 'react'

import { Helmet } from 'react-helmet'

import Topbar from '../components/topbar'
import Navbar from '../components/navbar'
import './params.css'

const Params = (props) => {
  return (
    <div className="params-container">
      <Helmet>
        <title>Params - benchmark.</title>
        <meta property="og:title" content="Params - benchmark." />
      </Helmet>
      <Topbar rootClassName="topbar-root-class-name4"></Topbar>
      <div className="general-div">
        <h1>Params</h1>
      </div>
      <Navbar></Navbar>
    </div>
  )
}

export default Params
