import NavBar from "./navbar";
import React, { Component } from "react";
import Testimonials from "./testimonials";
import Hero from "./hero";
import Achievements from "./achivements";

import Skills from "./skills";
import Footer from "./footer";
import HeadinBlock from "./headingBlock";
import { Route } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <HeadinBlock heading="My Achievements" />
        <Achievements />
        <HeadinBlock heading="My Skills" />
        <Skills />
        <HeadinBlock heading="Customers Satisfaction" />
        <Testimonials />
        <Footer />
      </>
    );
  }
}
export default Home;
