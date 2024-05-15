import React from 'react'

import { Helmet } from 'react-helmet'
import Map from '../components/map.js';
import './home.css'


const Home = (props) => {
  return (
    <div className="map-div">
      <Helmet>
        <title>benchmark.</title>
        <meta property="og:title" content="benchmark." />
      </Helmet>
        <div id="map" className="map-div2"><Map/></div>
    </div>
  )
}

export default Home
