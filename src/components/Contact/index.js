import React from "react";



function ContactEl(props) {
  return (
                <div className="mx-auto personalLinks" id="contact">
                    <h1 className="title">Contact 📫</h1>
                    <a href="https://www.linkedin.com/in/joel-straley-559aab97/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin fa-2x social" style={{ margin: ".2rem" }}>  </i></a>
                    <a href="https://twitter.com/joelstraley" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="https://github.com/Joelstraley" target="_blank" rel="noreferrer">
                    <i className="fab fa-github fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=joelstraley@email.com&su=Nice Portfolio!&body=Hi Joel, 
                    %0D%0A%0D%0AThis is the best Portfolio I've ever seen and I want to give you lots of money! 
                    %0D%0A%0D%0A[your name here]" target="_blank" rel="noreferrer">
                    <i className="far fa-envelope fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="tel:937-206-4970"> 
                    <i className="fas fa-phone-square fa-2x social" style={{ margin: ".2rem" }}></i></a>
                    <div className="new-line"></div>
                    <a className="social" href="Joel Straley - Resume - 2021.pdf" target="_blank">Download My Resume</a>
                </div>
          );
        }
        
        export default ContactEl;