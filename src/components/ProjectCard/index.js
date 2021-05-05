import React from "react";
import "./style.css"; 

function ProjectCard(props) { 
  console.log(props.image)
  return (
    <div className="card" >
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="content">        
        <h2><strong>{props.name}</strong></h2>
        <h6 class="tech">{props.tech}</h6>
        <h6>{props.description}</h6>
        <h6><i className="fas fa-globe"></i><a href={props.website} class="extURL">  Website   </a>
        <i className="fab fa-github fa-.5x"></i><a href={props.github} class="extURL">  Github</a></h6>
      </div>
    </div>
  );
}

export default ProjectCard;
