import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import Background from "../src/components/Background";
import backgroundImage from "./photos/luca-bravo-g_LG9LGyTk8-unsplash.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <div>  
  <Background className="row backgroundimg" backgroundImage={backgroundImage} >
    <Router basename={`${process.env.PUBLIC_URL}/`}>   
      <Navbar />
        <Wrapper>
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
        </Router>
        </Background>        
      </div>
  );
}

export default App;
