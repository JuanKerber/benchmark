import React from 'react'
import { Link } from 'react-router-dom'


import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-home">
        <Link to="/benchmark/" className="navbar-navlink">
          <img
            src={process.env.PUBLIC_URL + '/assets/home_icon.svg'}
            alt='Home'
            className="navbar-image"
          />
        </Link>
      </div>
      <div className="navbar-plus">
        <Link to="/benchmark/add" className="navbar-navlink1">
          <img
            src={process.env.PUBLIC_URL + '/assets/plus_icon.svg'}
            alt='Add'
            className="navbar-image1"
          />
        </Link>
      </div>
      <div className="navbar-likes">
        <Link to="/benchmark/likes" className="navbar-navlink2">
          <img
            src={process.env.PUBLIC_URL + '/assets/heart_icon.svg'}
            alt='Likes'
            className="navbar-image2"
          />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
