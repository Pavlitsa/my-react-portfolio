import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        {/* <Route exact path="/react-portfolio" component={Home} /> */}
      </div>
    </HashRouter>
  );
};

export default App;
