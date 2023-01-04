import Background from '../../components/Background'
import Row from '../../components/Row'
import Col from '../../components/Col/'
import Title from '../../components/Title'
import Headshot from '../../photos/about-me-headshot.jpg'

function About() {
  return (
    <Background className="row">
      <Row>
        <Col size="md-12" id="About">
          <div className="headline">
            <Title>About Me 🤵</Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-4" className="imgHeadshot">
          <img
            src={Headshot}
            alt="Joel Straley Headshot"
            className="img-fluid rounded headshot"
          />
        </Col>
        <Col size="md-8">
          <div id="about">
            <p>
              Hey, I'm Joel.
              <br />
              <br />
              <div className="new-line"></div>
              I'm a Fullstack Web Developer with 1.5 years of professional
              experience using the frameworks React and Laravel with Javascript
              and PHP to write, update and deploy code to production.
              <div className="new-line"></div>
              <br />
              My previous role was at Refersion, an enterprise-level (60k+
              users) Affiliate Marketing Management app, developing and
              maintaining a reusable and responsive component library to create
              scalable single page applications. I've worked in an Agile (Scrum)
              environment with a high-performing team that consistently exceeded
              sprint goals, often completing projects before deadlines and under
              budget.
              <div className="new-line"></div>
              <br />
              Before learning to code, my experience has been in operational
              logistics in fast-paced environments. I worked as an Operations
              Specialist for Uber for 6+ years and spent the 2020 pandemic
              working with The Migrant Kitchen to build a dynamic logistics
              strategy to deliver 1,000 meals a day, six days a week to NYC
              residents across all 5 boroughs.
              <div className="new-line"></div>
              <br />
              Outside of work, I've been involved in Improv and Sketch comedy
              for 10+ years in NYC and enjoy making short films.
              <br />
            </p>
            <br></br>
          </div>
        </Col>
      </Row>
    </Background>
  )
}

export default About
