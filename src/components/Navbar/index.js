import React, { Component } from "react";
import js from "../../photos/javascript_logo.png";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./style.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

render() {
  return (
    <nav className={classnames("navbar fixed-top navbar-expand navbar-expand-xsm navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-expand-xl navbar-dark", {
      "navbar--hidden": !this.state.visible
    })}
    >
      <Link className="navbar-brand" id="header">
      <a id="header" href="https://networthpost.org/net-worth/joel-straley-net-worth/" target="_blank" rel="noreferrer"><img src={js} alt={js} className="headerImg"></img>Joel Straley</a>
      </Link>
     {/*  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="#headline"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#projects"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
            </li>
          <li className="nav-item">
            <Link
              to="#toolbox"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Tools
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li> 

        </ul>
      </div>*/}
    </nav>
  );
}
}

