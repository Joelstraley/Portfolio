import React, { Component } from "react";
import Headroom from "react-headroom";
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
    window.addEventListener("scroll", this.handleScroll)
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
    id="navbarNav">
      <Link className="navbar-brand" id="header">
      <a id="header" href="https://networthpost.org/net-worth/joel-straley-net-worth/" target="_blank" rel="noreferrer"><img src={js} alt={js} className="headerImg"></img>Joel Straley</a>
      </Link>


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
         </ul> */} 

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
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

        </ul>

        </div>
         
    </nav>
    
  
  );
}
}

