import React, { Component } from 'react'
import js from '../../photos/javascript_logo.png'
import { Link } from 'react-router-dom'
import './style.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  render() {
    return (
      <div>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
      </button>
    
        <ul className="navbar-nav ml-auto">
     <nav className={classnames("navbar fixed-top navbar-expand navbar-expand-xsm navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-expand-xl navbar-dark", {
      "navbar--hidden": !this.state.visible
    })}
    id="navbarNav">
      <Link className="navbar-brand" id="header">
      <a id="header" href="https://networthpost.org/net-worth/joel-straley-net-worth/" target="_blank" rel="noreferrer"><img src={js} alt={js} className="headerImg"></img>Joel Straley</a>
      </Link>
 */}

        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" id="header">
            <a
              id="header"
              href="https://networthpost.org/net-worth/joel-straley-net-worth/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={js} alt={js} className="headerImg"></img>Joel Straley
            </a>
          </Link>
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <a class="dropdown-item" href="#projects">
                    Projects&ensp;
                  </a>
                  <a class="dropdown-item" href="#tools">
                    Tools&ensp;
                  </a>
                  <a class="dropdown-item" href="#contact">
                    Contact&ensp;
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* <ul className={isDark ? "dark-menu menu" : "menu"} >
        <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#projects">Projects</a></li>
            <li><a className="smoothscroll" href="#toolbox">Toolbox</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          <li>
            <a href="#">
              <ToggleSwitch />
            </a> 
          </li>  


          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul> 
         
         
         <li className="nav-item">
          <a href="#about">About&ensp;</a>
          </li>
          <li className="nav-item">
          <a href="#projects">Projects&ensp;</a>
            </li>
          <li className="nav-item">
          <a href="#toolbox">Tools&ensp;</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li> 
          </nav>
        </ul>
*/}
        </nav>
      </div>
    )
  }
}
