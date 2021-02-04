import "./App.css";
import NavBar from "./components/navbar";
import React, { Component } from "react";
import Testimonials from "./components/testimonials";
import Hero from "./components/hero";

class App extends Component {
  state = {
    menuItems: [
      { id: 1, name: "about me" },
      { id: 2, name: "Portfolio" },
      { id: 3, name: "Achievements" },
      { id: 4, name: "Contact" },
    ],
    testimonials: [
      {
        id: 1,
        name: "InfoGraphics",
        content: "Waleed did a great job exactly as he promised",
        date: "May 18, 2019 - May 19, 2019",
      },
      {
        id: 2,
        name: "advertising poster",
        content:
          "Very easy to work. Great communication with very fast response",
        date: "Jan 23, 2019 - Feb 2, 2019",
      },
      {
        id: 3,
        name: "Website for College",
        content: "Good job and all the work done professionally!",
        date: "Dec 3, 2018 - Jan 23, 2019",
      },
    ],
    hero: {
      heading: "frontline web developer",
      motive:
        "Love to design beautiful and responsive websites with a lot of passion",
      school: "Graduated from British Computer Society",
    },
  };
  render() {
    return (
      <div className="App">
        <NavBar nameOfItems={this.state.menuItems} />
        <Hero data={this.state.hero} />
        <Testimonials testimonials={this.state.testimonials} />
      </div>
    );
  }
}
export default App;
