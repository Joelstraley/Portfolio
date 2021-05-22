import React, { useState } from "react";
import Background from "../../components/Background";
/* import backgroundImage from "../../photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg";
  */
import backgroundImage from "../../photos/Asset_130.png";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col/";
import Title from "../../components/Title";
import Headshot from "../../photos/about-me-headshot.jpg";



function About() {

    return (
       <Background className="row backgroundimg" src={backgroundImage}>   
       <Container>
            <Row>
              <Col size="md-12">
              <div className="headline">
                  <Title>About Me 🤵</Title>
                  </div>
              </Col>
              {console.log(backgroundImage)}
          </Row>  
          <Row>
              <Col size="md-6">
                    <img src={Headshot} alt="Joel Straley Headshot" className="img-fluid rounded headshot"/>
              </Col>
              <Col size="md-6" id="about">
                  <div>
                  <p>Joel Straley is currently enrolled in the Columbia Engineering Coding Bootcamp to become a Full Stack Web Developer.<div className="new-line"></div><br></br> His previous experience is in Operational Logistics. During the COVID-19 pandemic he worked with {/* <a href="https://www.themigrantkitchennyc.com/">The Migrant Kitchen</a>  */}to build a dynamic logistical strategy to deliver 1,000 meals a day, six days a week to NYC residents in all 5 burroughs.
                    <div className="new-line"></div><br></br>Previously, he was a Vehicle Operations Specialist for Uber where he started as a Driver Support Representative. His focus was as a liaison between Uber, their 5 vehicle rental providers and the Taxi and Limousine Commission. This was vital in laying the logistical groundwork to help increase the availability of Wheelchair accessible commercial vehicles in NYC.</p>
                    <div>
                    <div className="mx-auto personalLinks">
                      <br></br>
                    <a href="https://www.linkedin.com/in/joel-straley-559aab97/" target="_blank">
                    <i className="fab fa-linkedin fa-2x social" style={{ margin: ".2rem" }}>  </i></a>
                    <a href="https://twitter.com/joelstraley" target="_blank">
                    <i className="fab fa-twitter fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="https://github.com/Joelstraley" target="_blank">
                    <i className="fab fa-github fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="mailto:joelstraley@gmail.com" target="_blank">
                    <i className="far fa-envelope fa-2x social" style={{ margin: ".2rem" }}>   </i></a>
                    <a href="tel:937-206-4970"> 
                    <i className="fas fa-phone-square fa-2x social" style={{ margin: ".2rem" }}></i></a>
                    <div className="new-line"></div>
                    <a href="JOEL STRALEY RESUME - 2021 - WEB DEV (1).pdf" download>Download PDF Resume</a>
                  </div>
                  <br></br>
                  <h4 className="toolbox">Toolbox &ensp;🧰 </h4>
                    <img src="https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg" alt="HTML logo" width="30" height="30" />
                    <img src="https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain-wordmark.svg" alt="CSS logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/javascript/javascript-original.svg" alt="JavaScript logo" width="30" height="30" />
                    <img src="https://camo.githubusercontent.com/eab4e3fe8ddae86bac8e286b490019fa69a2f57daf01ffeb38d24b2bb32d7e1c/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7461696c77696e646373732e737667" alt="Tailwind logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap logo" width="30" height="30" /> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/npm/npm-original-wordmark.svg" alt="NPM logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDB logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/mysql/mysql-original-wordmark.svg" alt="MySQL logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/react/react-original-wordmark.svg" alt="React logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/heroku/heroku-plain-wordmark.svg" alt="Heroku logo" width="30" height="30" /> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/photoshop/photoshop-line.svg" alt="Photoshop logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/premierepro/premierepro-original.svg" alt="Premiere logo" width="30" height="30" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/express/express-original-wordmark.svg" alt="Express logo" width="30" height="30" />
                  </div>
                  </div>
              </Col>
          </Row>
      </Container> 
      </Background>
      );
}

export default About;