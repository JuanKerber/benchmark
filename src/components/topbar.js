import React from 'react'
import { Link } from 'react-router-dom'

import './topbar.css'

const Topbar = () => {

  return (
    <div className={`topbar-topbar`}>
      <Link to="/benchmark/" className="topbar-navlink">
        <h1 className="topbar-title">benchmark.</h1>
      </Link>
      <Link to="/benchmark/params" className="topbar-navlink1">
        <img
          src={process.env.PUBLIC_URL + '/assets/params_icon.svg'}
          alt='Parameters'
          className="topbar-image"
        />
      </Link>
    </div>
  )
}


export default Topbar
