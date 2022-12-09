import React, { Component } from 'react'
import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../projects.json'

class Portfolio extends Component {
  state = {
    projects,
  }

  render() {
    return (
      <div className="projects" id="projects">
        <Title>Projects 👨‍💻</Title>
        {this.state.projects.map((project) => (
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
        ))}
      </div>
    )
  }
}

export default Portfolio
