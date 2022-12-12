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
              Hi, I'm Joel.
              <br />
              <br />
              <div className="new-line"></div>
              I am a Full Stack Web Developer who graduated from the Columbia
              Engineering Coding Bootcamp. I recently worked as an Associate
              Front-end engineer for Refersion, an enterprise-level (14,000
              users) Affiliate Marketing Management application.
              <br />
              <br />I was integral part of creating an in-house reusable
              component Library using React Storybook. These components were
              utilized in a redesign of the entire application to showcase more
              robust and responsive data-tables and dashboards. I gained
              experience using the frameworks React and Laravel with Javascript
              and PHP to write, update and deploy code to production. I worked
              in a Agile (Scrum) environment with a team that consistently
              exceeded sprint goals.
              <div className="new-line"></div>
              <br />
              Previously, I worked as Operations Specialist for Uber where my
              work was vital in helping to increase the availability of
              Wheelchair accessible commercial vehicles in NYC. During 2020 I
              was a Logistics Manager for The Migrant Kitchen and built a
              dynamic logistical strategy to deliver 1,000 meals a day, six days
              a week to NYC residents across all 5 burroughs.
            </p>
            <br></br>
          </div>
        </Col>
      </Row>
    </Background>
  )
}

export default About
