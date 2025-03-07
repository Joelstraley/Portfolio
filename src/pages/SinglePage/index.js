/* import Background from '../../components/Background' */
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col/'
import ContactEl from '../../components/Contact/'
import About from '../About/'
import Portfolio from '../Portfolio'
import Toolbox from '../../components/Toolbox'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Background from '../../components/Background'
import backgroundImage from '../../photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg'
import '../../App.css'

function SinglePage() {

  const body = document.getElementsByTagName("body")[0].style
  console.log(body)

  body.overflowY = `scroll`

  return (
    <>
      <Navbar />
      <Background className="row" backgroundImage={backgroundImage}>
        <Container>
          <About />
          <Col size="md-10">
            <Portfolio />
          </Col>
          <Col size="md-10">
            <Row>
              <Toolbox />
            </Row>
          </Col>
          <Col size="md-10">
            <Row>
              <ContactEl />
            </Row>
          </Col>
        </Container>
      </Background>
      <Footer />
    </>
  )
}

export default SinglePage
