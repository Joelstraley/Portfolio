import React, { Component } from 'react'
import js from '../../photos/javascript_logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  /*  constructor(props) {
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
  } */

  render() {
    return (
      <div className="nav-container">
        <div class="dropdown navbar-brand" id="header">
          <button
            class="btn btn-secondary dropdown-toggle nav-button"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div
            class="dropdown-menu nav-dropdown"
            aria-labelledby="dropdownMenuButton"
          >
            <a class="dropdown-item nav-item" href="#top">
              About Me
            </a>
            <a class="dropdown-item nav-item" href="#projects">
              Projects
            </a>
            <a class="dropdown-item nav-item" href="#tools">
              Tools
            </a>
            <a class="dropdown-item nav-item" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <Link className="navbar-brand header">
          <a
            id="header"
            href="https://networthpost.org/net-worth/joel-straley-net-worth/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={js} alt={js} className="headerImg"></img>Joel Straley
          </a>
        </Link>
      </div>
    )
  }
}
