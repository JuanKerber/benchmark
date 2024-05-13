import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-home">
        <img
          src={props.homeIcon}
          alt={props.homeAlt}
          className="navbar-image"
        />
      </div>
      <div className="navbar-plus">
        <img src={props.addIcon} alt={props.addAlt} className="navbar-image1" />
      </div>
      <div className="navbar-likes">
        <img
          src={props.heartIcon}
          alt={props.heartAlt}
          className="navbar-image2"
        />
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
  homeIcon: '/home_icon.svg',
  homeAlt: 'Home',
  heartIcon: '/heart_icon.svg',
  heartAlt: 'Likes',
  addIcon: '/plus_icon.svg',
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
