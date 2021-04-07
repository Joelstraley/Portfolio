import React from "react";



function Background(props) {
  return (
/*     <div className="text-center" /* style={{ backgroundImage: `url(${props.backgroundImage})`  }}> */
     <div>
      {props.children}
    </div>
  );
}

export default Background;