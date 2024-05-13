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
      <Navbar></Navbar>
    </div>
  )
}

export default Params
