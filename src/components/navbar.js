import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-home">
        <Link to="/benchmark/" className="navbar-navlink">
          <img
            src={props.homeIcon}
            alt={props.homeAlt}
            className="navbar-image"
          />
        </Link>
      </div>
      <div className="navbar-plus">
        <Link to="/benchmark/add" className="navbar-navlink1">
          <img
            src={props.addIcon}
            alt={props.addAlt}
            className="navbar-image1"
          />
        </Link>
      </div>
      <div className="navbar-likes">
        <Link to="/benchmark/likes" className="navbar-navlink2">
          <img
            src={props.heartIcon}
            alt={props.heartAlt}
            className="navbar-image2"
          />
        </Link>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
  homeIcon: '/assets/home_icon.svg',
  homeAlt: 'Home',
  heartIcon: '/assets/heart_icon.svg',
  heartAlt: 'Likes',
  addIcon: '/assets/plus_icon.svg',
  addAlt: 'Add',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
  homeIcon: PropTypes.string,
  homeAlt: PropTypes.string,
  heartIcon: PropTypes.string,
  heartAlt: PropTypes.string,
  addIcon: PropTypes.string,
  addAlt: PropTypes.string,
}

export default Navbar
