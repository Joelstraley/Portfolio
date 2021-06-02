import React from "react";
import "./style.css"; 

function ProjectCard(props) { 
  console.log(props.image)
  return (
    <a href={props.website}>
    <div className="card" >
      <div className="img-container">
        <img src={props.image} alt={props.name} className="portImg" />
      </div>
      <div className="content">        
        <h2><strong>{props.name}</strong></h2>
        <i><h6 className="tech">{props.tech}</h6></i>
        <h6>{props.description}</h6>
        <h6><i className="fas fa-globe"></i><a href={props.website} className="extURL">  Website   </a>
        <i className="fab fa-github fa-.5x"></i><a href={props.github} className="extURL">  Github</a></h6>
      </div>
    </div>
    </a>
  );
}

export default ProjectCard;
