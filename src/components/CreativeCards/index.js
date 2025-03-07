import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Creatives from '../../creatives.json'
import '../ProjectCard/style.css'
import CardElement from '../CardElement'

function CreativeCard(props) {
  const [projects, setProjects] = useState(Creatives)
  const [isContentVisible, setIsContentVisible] = useState(true)
  const [id, setId] = useState(0)

  useEffect(() => {
    setProjects(Creatives)
  }, [])

  const prevPage = (e) => {
    if (id === 0) {
      setId(projects.length - 1)
      setIsContentVisible(true)
    } else {
      setId(id - 1)
      setIsContentVisible(true)
    }
  }

  const nextPage = (e) => {
    if (id === projects.length - 1) {
      setId(0)
      setIsContentVisible(true)
    } else if (id >= -1) {
      setId(id + 1)
      setIsContentVisible(true)
    }
  }

  return (
    <div className="main-wrapper">
      <button className="button-creative" onClick={() => prevPage(id)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {projects.map((project, index) => {
        return (
          isContentVisible &&
          index === id && (
            <CardElement
              key={index}
              index={id}
              website={project.website}
              id={project.id}
              description={project.description}
            />
          )
        )
      })}
      <button className="button-creative" onClick={() => nextPage(id)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default CreativeCard
