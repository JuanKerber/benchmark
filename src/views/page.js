import React from 'react'

import { Helmet } from 'react-helmet'

import Topbar from '../components/topbar'
import NotFound4 from '../components/not-found4'
import Navbar from '../components/navbar'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - benchmark.</title>
        <meta property="og:title" content="Page - benchmark." />
      </Helmet>
      <Topbar rootClassName="topbar-root-class-name1"></Topbar>
      <NotFound4 rootClassName="not-found4-root-class-name"></NotFound4>
      <Navbar></Navbar>
    </div>
  )
}

export default Page
