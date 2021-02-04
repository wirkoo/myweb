import "./App.css";
import NavBar from "./components/navbar";
import React, { Component } from "react";
import Testimonials from "./components/testimonials";
import Hero from "./components/hero";
import Achievements from "./components/achivements";
import pu from "./images/pu__logo.jpg";
import bcs from "./images/bcs__logo.jpg";
import Skills from "./components/skills";
import Footer from "./components/footer";
import HeadinBlock from "./components/headingBlock";

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
    achievements: [
      {
        id: 1,
        image: bcs,
        name: "british Computer society",
        about: "Professional Graduate Diploma in IT.",
        details:
          "Bachelors in IT(USA) equivelance by World Educational Services",
      },
      {
        id: 2,
        image: pu,
        name: "Punjab University",
        about: "Cisco Certified Network Associates",
        details:
          "Networking Certification of Cisco offered by Punjab University Lahore",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <NavBar nameOfItems={this.state.menuItems} />
        <Hero data={this.state.hero} />
        <HeadinBlock heading="My Achievements" />
        <Achievements data={this.state.achievements} />
        <HeadinBlock heading="My Skills" />
        <Skills />
        <HeadinBlock heading="Customers Satisfaction" />
        <Testimonials testimonials={this.state.testimonials} />
        <Footer />
      </div>
    );
  }
}
export default App;
