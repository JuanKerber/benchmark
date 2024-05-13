import React from 'react'

import { Helmet } from 'react-helmet'

import NotFound4 from '../components/not-found4'
import './page.css'

const Page = (props) => {
  return (
    <div>
      <Helmet>
        <title>404 - benchmark.</title>
        <meta property="og:title" content="404 - benchmark." />
      </Helmet>
       <NotFound4 rootClassName="not-found4-root-class-name"></NotFound4>
    </div>
  )
}

export default Page
