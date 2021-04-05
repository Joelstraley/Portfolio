import React from "react";
import Background from "../../components/Background";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col/";
import Headshot from "../../photos/about-me-headshot.jpg"



function About() {
  return (
       <Background className="row backgroundimg" backgroundImage="../../photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg">
       <Container style={{ marginTop: 100 }}>
            <Row>
              <Col size="md-12"></Col>
          </Row>  
          <Row>
              <Col size="md-12">
                  <div className="headline">
                      <h1>About Me</h1>
                  </div>
              </Col>
          </Row>
          <Row>
              <Col size="md-3">
                    <img src={Headshot} alt="Joel Straley Headshot" className="img-fluid rounded headshot"/>
              </Col>
              <Col size="md-9" id="about">
                    <p>Joel Straley is currently enrolled in the Columbia Engineering Coding Bootcamp to become a Full Stack Web Developer. <div className="new-line"></div>His previous experience is in Operational Logistics. During the COVID-19 pandemic he worked with {/* <a href="https://www.themigrantkitchennyc.com/">The Migrant Kitchen</a>  */}to build a dynamic logistical strategy to deliver 1,000 meals a day, six days a week to NYC residents in all 5 burroughs.
                    <div className="new-line"></div>Previously, he was a Vehicle Operations Specialist for Uber where he started as a Driver Support Representative. His focus was as a liaison between Uber, their 5 vehicle rental providers and the Taxi and Limousine Commission. This was vital in laying the logistical groundwork to help increase the availability of Wheelchair accessible commercial vehicles in NYC.</p>
              </Col>
          </Row>
      </Container> 
      </Background>
    
      );
}

export default About;