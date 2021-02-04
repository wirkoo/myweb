import React, { Component } from "react";
import pu from "../images/pu__logo.jpg";
import bcs from "../images/bcs__logo.jpg";
class Achievements extends Component {
  state = {
    data: [
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
      <>
        {this.state.data.map((d) => (
          <div className="achievements">
            <div className="achievement__image">
              <div className="achievement__logo-container">
                <img src={d.image}></img>
              </div>
            </div>
            <div className="achievement__content">
              <h3 className="achievement__heading">{d.name}</h3>
              <p>{d.about}</p>
              <p className="focused__details">{d.details}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Achievements;
