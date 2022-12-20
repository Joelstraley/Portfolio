import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Single from './pages/SinglePage/index'
import Creative from './pages/CreativePage/index'
import Background from '../src/components/Background'
import backgroundImage from './photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg'
import './App.css'

function App() {
  return (
    <div>
      <Background className="row" backgroundImage={backgroundImage}>
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Route exact path={['/creative']} component={Creative} />
          <Route exact path={['/', '/about']} component={Single} />
        </Router>
      </Background>
    </div>
  )
}

export default App
