import React, { Component } from "react";
import waleed from "../images/waleed.jpg";
class Hero extends Component {
  state = {
    data: {
      heading: "frontline web developer",
      motive:
        "Love to design beautiful and responsive websites with a lot of passion",
      school: "Graduated from British Computer Society",
    },
  };
  render() {
    return (
      <>
        <div className="hero">
          <div className="image__container">
            <img
              className="hero__image"
              src={waleed}
              alt="Frontline Developer Waleed"
            />
          </div>

          <div className="hero__aboutSection">
            <h1 className="hero__heading">{this.state.data.heading}</h1>
            <div className="hero__content">
              <h3>{this.state.data.motive}</h3>
              <p>{this.state.data.school}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
