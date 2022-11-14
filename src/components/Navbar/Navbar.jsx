import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "../Navbar/Navbar.modules.css"
export default class Navbar extends Component {
  render() {
    return (
        <>
<nav className="navbar navbar-expand-lg fixed-top">
  <div className='container-fluid'>
    <div className="nav-logo">
      <Link className="navbar-brand" to="">START REACT</Link>
    </div>
    <div id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="about">ABOUT</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="contacts">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


        
  

        </>
    )
  }
}
