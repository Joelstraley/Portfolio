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
    
            <Row>
              <Col size="md-12">
              <div className="headline">
                  <Title>About Me 🤵</Title>
                  </div>
              </Col> 
              {console.log(backgroundImage)}
          </Row>  
          <Row>
              <Col size="md-4">
                    <img src={Headshot} alt="Joel Straley Headshot" className="img-fluid rounded headshot"/>
              </Col>
              <Col size="md-8" >
                  <div id="about">
                  <p>Joel Straley is a Full Stack Web Developer. He graduated from the Columbia Engineering Coding Bootcamp.<div className="new-line"></div><br></br> His previous experience is in Operational Logistics. During the COVID-19 pandemic he worked with {/* <a href="https://www.themigrantkitchennyc.com/">The Migrant Kitchen</a>  */}to build a dynamic logistical strategy to deliver 1,000 meals a day, six days a week to NYC residents in all 5 burroughs.
                    <div className="new-line"></div><br></br>Previously, he was an Operations Specialist for Uber where he started as a Driver Support Representative. His focus was as a liaison between Uber, their 5 vehicle rental providers and the Taxi and Limousine Commission. This was vital in laying the logistical groundwork to help increase the availability of Wheelchair accessible commercial vehicles in NYC.</p>
                  <br></br>
                  </div>
              </Col>
          </Row>
    
      </Background>
      );
}

export default About;