import React, { Component } from 'react'
import { Link } from "react-router-dom";
/*import PropTypes from 'prop-types'*/

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-dark" style={{border:"3px solid red",borderRadius:"10px", borderTop:"none"}}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fw-bold" style={{color:"red"}} to="/home">NewsMonkey</Link>
    <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link fs-6 hoverOn" style={{color:"white"}} to="/home">Home</Link></li>
          <li className="nav-item">
          <Link className="nav-link fs-6 hoverOn" style={{color:"white"}} to="/business">Business</Link></li>
          <li className="nav-item">
          <Link className="nav-link fs-6 hoverOn" style={{color:"white"}} to="/entertainment">Entertainment</Link></li>
          <li className="nav-item">
          <Link className="nav-link fs-6 hoverOn" style={{color:"white"}} to="/health">Health</Link></li>
          <li className="nav-item">
          <Link className="nav-link fs-6 hoverOn" style={{color:"white"}} to="/science">Science</Link></li>
          <li className="nav-item">
          <Link className="nav-link fs-6 hoverOn" style={{color:"white"}} to="/sports">Sports</Link></li>
          <li className="nav-item">
          <Link className="nav-link fs-6 hoverOn" style={{color:"white"}} to="/technology">Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
