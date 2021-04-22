import React from "react";
import Background from "../../components/Background";
import backgroundImage from "../../photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col/";
import Title from "../../components/Title";
import Headshot from "../../photos/about-me-headshot.jpg";


function About() {
  return (
       <Background className="row backgroundimg" src={backgroundImage}>   
       <Container style={{ marginTop: 100 }}>
            <Row>
              <Col size="md-12">
              <div className="headline">
                  <Title>About Me</Title>
                  </div>
              </Col>
          </Row>  
          <Row>
              <Col size="md-3">
                    <img src={Headshot} alt="Joel Straley Headshot" className="img-fluid rounded headshot"/>
              </Col>
              <Col size="md-9" id="about">
                    <p>Joel Straley is currently enrolled in the Columbia Engineering Coding Bootcamp to become a Full Stack Web Developer.<div className="new-line"></div><br></br> His previous experience is in Operational Logistics. During the COVID-19 pandemic he worked with {/* <a href="https://www.themigrantkitchennyc.com/">The Migrant Kitchen</a>  */}to build a dynamic logistical strategy to deliver 1,000 meals a day, six days a week to NYC residents in all 5 burroughs.
                    <div className="new-line"></div><br></br>Previously, he was a Vehicle Operations Specialist for Uber where he started as a Driver Support Representative. His focus was as a liaison between Uber, their 5 vehicle rental providers and the Taxi and Limousine Commission. This was vital in laying the logistical groundwork to help increase the availability of Wheelchair accessible commercial vehicles in NYC.</p>
                    <div className="mx-auto personalLinks">
                    <a href="https://www.linkedin.com/in/joel-straley-559aab97/" target="_blank">
                    <i className="fab fa-linkedin fa-2x" style={{ margin: 10 }}>  </i></a>
                    <a href="https://twitter.com/joelstraley" target="_blank">
                    <i className="fab fa-twitter fa-2x" style={{ margin: 10 }}>   </i></a>
                    <a href="https://github.com/Joelstraley" target="_blank">
                    <i className="fab fa-github fa-2x" style={{ margin: 10 }}>   </i></a>
                    <a href="mailto:joelstraley@gmail.com" target="_blank">
                    <i className="far fa-envelope fa-2x" style={{ margin: 10 }}>   </i></a>
                    <a href="tel:937-206-4970"> 
                    <i className="fas fa-phone-square fa-2x" style={{ margin: 10 }}></i></a>
                    <div className="new-line"></div>
                    
                    <a href="JOEL STRALEY RESUME - 2021 - WEB DEV (1).pdf" download>Download PDF Resume</a>
                  </div>
              </Col>
          </Row>
      </Container> 
      </Background>
      );
}

export default About;