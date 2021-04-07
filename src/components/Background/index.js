import React from "react";



function Background(props) {
  return (
    <div className="backgroundimg text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Background;