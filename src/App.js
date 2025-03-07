import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Single from './pages/SinglePage/index';
import Creative from './pages/CreativePage/index';
import Intro from './pages/Intro/index';


function App() {
  return (
    <div>
   {/*    <Background className="row" backgroundImage={backgroundImage}> */}
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Route exact path={['/creative']} component={Creative} />
          <Route exact path={['/']} component={Intro} />
          <Route exact path={['/main']} component={Single} />
        </Router>
     {/*  </Background> */}
    </div>
  )
}

export default App
