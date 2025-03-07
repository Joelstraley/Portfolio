import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../projects.json'

function Portfolio() {

    return (
      <div className="projects" id="projects">
        <Title>Projects 👨‍💻</Title>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
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

export default Portfolio
