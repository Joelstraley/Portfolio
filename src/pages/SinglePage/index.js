import Background from '../../components/Background'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col/'
import ContactEl from '../../components/Contact/'
import About from '../About/'
import Portfolio from '../Portfolio'
import Toolbox from '../../components/Toolbox'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function SinglePage() {
  return (
    <>
      <Navbar />
      <Background className="row">
        <Container>
          <About></About>
          <Col size="md-10">
            <Portfolio></Portfolio>
          </Col>
          <Col size="md-10">
            <Row>
              <Toolbox></Toolbox>
            </Row>
          </Col>
          <Col size="md-10">
            <Row>
              <ContactEl></ContactEl>
            </Row>
          </Col>
        </Container>
      </Background>
      <Footer />
    </>
  )
}

export default SinglePage
