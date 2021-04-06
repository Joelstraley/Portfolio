import React from "react";
import backgroundImage from "../../photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg";


function Background(props) {
  return (
    <div className="backgroundimg text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Background;