import { useState } from 'react';
import logo from '../../photos/javascript_logo.png'

export default function Navbar() {
  const [mirrorToggle, setMirrorToggle] = useState(true)

  const changeMirror = () => {
    const container = document.getElementsByClassName('container')

    if (mirrorToggle) {
      container[0].style = 'transform: rotateY(180deg)';
      
      setMirrorToggle(false);
    } else {
      container[0].style = 'transform: rotateY(0deg)';
      setMirrorToggle(true)
    }
  } 

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
            href="https://www.youtube.com/@JoelStraley/videos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt={logo} className="headerImg"></img>Joel Straley
          </a>
          { mirrorToggle ?
            <p className="nav--mirror_btn" onClick={() => changeMirror()}>MIRROR</p>
            : 
            <p className="nav--mirror_btn" onClick={() => changeMirror()}>RORRIM</p>
          }
      </div>
    )
}
