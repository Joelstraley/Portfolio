import React, { Component } from 'react'
import js from '../../photos/javascript_logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="dropdown navbar-brand" id="header">
          <button
            className="btn btn-secondary dropdown-toggle nav-button"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div
            className="dropdown-menu nav-dropdown"
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item nav-item" href="#top">
              About Me
            </a>
            <a className="dropdown-item nav-item" href="#projects">
              Projects
            </a>
            <a className="dropdown-item nav-item" href="#tools">
              Tools
            </a>
            <a className="dropdown-item nav-item" href="#contact">
              Contact
            </a>
          </div>
        </div>
        {/* <Link className="navbar-brand header" to={"https://networthpost.org/net-worth/joel-straley-net-worth/"}> */}
          <a
            id="header"
            className="navbar-brand header"
            href="https://networthpost.org/net-worth/joel-straley-net-worth/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={js} alt={js} className="headerImg"></img>Joel Straley
          </a>
    
      </div>
    )
  }
}
