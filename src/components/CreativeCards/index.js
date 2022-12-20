import { useState, React, useEffect } from 'react'
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
  /*   const [prevId, setPrevId] = useState(null)
  const [nextId, setNextId] = useState(null) */

  useEffect(() => {
    setProjects(Creatives)
  }, [])

  /*   useEffect(() => {
    setNextId(null)
  }, [prevId])

  useEffect(() => {
    setPrevId(null)
  }, [nextId])
 */
  const prevPage = () => {
    if (id === 0) {
      console.log('NEXT-if', id)
      setId(4)
      setIsContentVisible(true)
    } else if (id >= 4) {
      setId(0)
      setIsContentVisible(true)
    } else {
      setId(id - 1)
      setIsContentVisible(true)
    }
  }

  const nextPage = () => {
    if (id >= -1) {
      console.log('NEXT-if', id)
      setId(id + 1)
      setIsContentVisible(true)
    } else if (id >= 4) {
      setId(0)
      setIsContentVisible(true)
    } else {
      console.log('NEXT-else', id)
      setId(id + 1)
      setIsContentVisible(true)
    }
  }

  return (
    <div className="main-wrapper">
      <button className="button-creative" onClick={prevPage}>
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
      <button className="button-creative" onClick={nextPage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default CreativeCard
