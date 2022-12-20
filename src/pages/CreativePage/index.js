import React from 'react'
import Background from '../../components/Background'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col/'
import CreativeCard from '../../components/CreativeCards'
import Footer from '../../components/Footer'
/* import Creatives from '../../creatives.json' */
/*import About from '../About/'
import Portfolio from '../Portfolio'
import Toolbox from '../../components/Toolbox' */

function CreativePage() {
  return (
    <Background className="row">
      <Container>
        <Col size="md-10">
          <CreativeCard />
        </Col>
        <Col size="md-10">
          <Row>
            <div className="mx-auto personalLinks" id="contact">
              <a className="social" href="/">
                <h1 className="title">Go Back Home 🏠</h1>
              </a>
            </div>
          </Row>
        </Col>
      </Container>
      <Footer />
    </Background>
  )
}

export default CreativePage
