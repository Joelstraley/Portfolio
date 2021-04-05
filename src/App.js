import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
      <Navbar />
        <Wrapper>
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
        </div>
      </Router>
  );
}

export default App;
