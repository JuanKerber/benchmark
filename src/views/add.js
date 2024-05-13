import React from 'react'

import { Helmet } from 'react-helmet'

import Topbar from '../components/topbar'
import Navbar from '../components/navbar'
import './add.css'

const Add = (props) => {
  return (
    <div className="add-container">
      <Helmet>
        <title>Add - benchmark.</title>
        <meta property="og:title" content="Add - benchmark." />
      </Helmet>
      <Topbar rootClassName="topbar-root-class-name2"></Topbar>
      <div className="general-div">
        <h1>add</h1>
      </div>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
    </div>
  )
}

export default Add
