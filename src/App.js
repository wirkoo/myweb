import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/skills";
import Portfolio from "./components/Portfolio";
import Achievements from "./components/achivements";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="App">
          <Route path="/about me" component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>

          <Route path="/blog" component={Blog}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/" exact component={Home}></Route>
        </div>
      </>
    );
  }
}

export default App;
