import React from 'react'
import { Helmet } from 'react-helmet'
import './add.css'

import Marker from '../components/marker.js';


const Add = (props) => {
  return (
    <div>
      <Helmet>
        <title>Add - benchmark.</title>
        <meta property="og:title" content="Add - benchmark." />
      </Helmet>
      
        <Marker/>
        

    </div>
  )
}

export default Add
