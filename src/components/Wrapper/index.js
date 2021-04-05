import React from "react";

function Wrapper(props) {
  return  <main className="wrapper" style={{ backgroundImage: `url(${props.backgroundImage})` }} {...props} >
      {props.children}
    </main>
}

export default Wrapper;