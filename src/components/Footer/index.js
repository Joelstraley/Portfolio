import React from "react";

function Footer() {
  return ( 
    <footer>
    <nav className="navbar fixed-bottom navbar-dark" >
      <a className="navbar-brand" id="footer"> &copy; 2021</a>
       <button className="btn btn-outline-primary" onClick="swapStyleSheet('./assets/css/night.css')">
      <i className="fas fa-cloud-moon fa-1.5x moonsun">
      </i></button>
      <button className="btn btn-outline-primary" onClick="swapStyleSheet('./assets/css/bright.css')">
        <i className="fas fa-cloud-sun fa-1.5x moonsun">
        </i></button>
    </nav>
  </footer>
  );
}

export default Footer;
