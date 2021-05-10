import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col/";
import Title from "../../components/Title";
import ProjectCard from "../../components/ProjectCard";
import Wrapper from "../../components/Wrapper";
import projects from "../../projects.json";

class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>
        <Container >
          <Row>
            <Title>Projects 👨‍💻</Title>
            {this.state.projects.map(project => (
              <Col size="col-md-6 col-lg-12 col-xxl-12">
                <ProjectCard
                  a={project.website}
                  id={project.id}
                  image={project.image}
                  name={project.name}
                  tech={project.tech}
                  description={project.description}
                  website={project.website}
                  github={project.github}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>


    );
  }
}

export default Portfolio;
