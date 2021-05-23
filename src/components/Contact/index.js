import React from "react";



function ContactEl(props) {
  return (
                <div className="mx-auto personalLinks">
                    <h1>Contact 📫</h1>
                    <a href="https://www.linkedin.com/in/joel-straley-559aab97/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin fa-2x social" style={{ margin: ".2rem" }}>  </i></a>
                    <a href="https://twitter.com/joelstraley" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="https://github.com/Joelstraley" target="_blank" rel="noreferrer">
                    <i className="fab fa-github fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="mailto:joelstraley@gmail.com" target="_blank" rel="noreferrer">
                    <i className="far fa-envelope fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="tel:937-206-4970"> 
                    <i className="fas fa-phone-square fa-2x social" style={{ margin: ".2rem" }}></i></a>
                    <div className="new-line"></div>
                    <a href="JOEL STRALEY RESUME - 2021 - WEB DEV (1).pdf" download>Download My Resume</a>
                </div>
          );
        }
        
        export default ContactEl;