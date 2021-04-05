import React from "react";
/* import "./style.css"; */

function ProjectCard(props) {
  return (
    <div className="card" size="md-12">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <h2><strong>{props.name}</strong></h2>
          </li>
          <li>
             <h6>{props.tech}</h6>
          </li>
          <li>
            {props.description}
          </li>
          <li>
          <h6><i className="fas fa-globe"></i><a href={props.website} class="extURL">  Website</a>
          <i className="fab fa-github fa-.5x"></i><a href={props.github} class="extURL">  Github</a></h6>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
