import { Outlet} from "react-router-dom";
import React from 'react'


import Topbar from '../components/topbar'
import Navbar from '../components/navbar'
import './layout.css'

const Layout = () => {
  return (
    <>
    <div className="container">
    <Topbar rootClassName="topbar-root-class-name"></Topbar>
    <div className="general-div">
      <Outlet/>
    </div>
    <Navbar rootClassName="navbar-root-class-name"></Navbar>
  </div>
    </>
  )
};

export default Layout;