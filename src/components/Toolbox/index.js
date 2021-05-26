import React from "react";
import Row from "../Row";
import Col from "../Col";

function Toolbox(props) { 
  console.log(props.image)
  return (
   
      <Row>
      <div className="toolbox title" id="toolbox">
        <h1 className="toolbox">Toolbox&ensp;🧰 </h1>
        <img src="https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg" alt="HTML logo" width="50" height="50" />
        <img src="https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain-wordmark.svg" alt="CSS logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/javascript/javascript-original.svg" alt="JavaScript logo" width="50" height="50" />
        <img src="https://camo.githubusercontent.com/eab4e3fe8ddae86bac8e286b490019fa69a2f57daf01ffeb38d24b2bb32d7e1c/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7461696c77696e646373732e737667" alt="Tailwind logo" width="30" height="30" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap logo" width="50" height="50" /> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/npm/npm-original-wordmark.svg" alt="NPM logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDB logo" width="50" height="50" />
        <br></br>
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/mysql/mysql-original-wordmark.svg" alt="MySQL logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/react/react-original-wordmark.svg" alt="React logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/heroku/heroku-plain-wordmark.svg" alt="Heroku logo" width="50" height="50" /> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/photoshop/photoshop-line.svg" alt="Photoshop logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/premierepro/premierepro-original.svg" alt="Premiere logo" width="50" height="50" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/c7d326b6009e60442abc35fa45706d6f30ee4c8e/icons/express/express-original-wordmark.svg" alt="Express logo" width="50" height="50" />
        <br></br>
    </div>
    </Row>

  );
}

export default Toolbox;
