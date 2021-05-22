import React, { useState } from "react";
import Background from "../../components/Background";
/* import backgroundImage from "../../photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg";
  */
import backgroundImage from "../../photos/Asset_130.png";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col/";
import Title from "../../components/Title";
import ContactEl from "../../components/Contact/";
import About from "../About/";
import Portfolio from "../Portfolio";
import Toolbox from "../../components/Toolbox";



function SinglePage() {

    return (
       <Background className="row backgroundimg" src={backgroundImage}>   
        <Container>
          <About></About>
          <Col size="md-6">
           <Row>
            <Portfolio></Portfolio>
          </Row>
          </Col>
          <Col size="md-6">
          <Row>
            <Toolbox></Toolbox>
            </Row>
            </Col>
            <Col size="md-6">
          <Row>
            <ContactEl></ContactEl>
            </Row>
            </Col>
          </Container>
      </Background>
      );
}

export default SinglePage;