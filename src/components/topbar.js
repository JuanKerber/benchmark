import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './topbar.css'

const Topbar = (props) => {
  return (
    <div className={`topbar-topbar ${props.rootClassName} `}>
      <Link to="/benchmark/" className="topbar-navlink">
        <h1 className="topbar-title">{props.title}</h1>
      </Link>
      <Link to="/benchmark/params" className="topbar-navlink1">
        <img
          src={props.params}
          alt={props.paramsAlt}
          className="topbar-image"
        />
      </Link>
    </div>
  )
}

Topbar.defaultProps = {
  title: 'benchmark.',
  rootClassName: '',
  params: '/assets/params_icon.svg',
  paramsAlt: 'Parameters',
}

Topbar.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  params: PropTypes.string,
  paramsAlt: PropTypes.string,
}

export default Topbar
