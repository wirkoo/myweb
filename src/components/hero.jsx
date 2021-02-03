import React, { Component } from "react";
import waleed from "../images/waleed.jpg";
class Hero extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="hero">
          <div className="hero__imageSection">
            <div className="image__container">
              <img
                className="hero__image"
                src={waleed}
                alt="Frontline Developer Waleed"
              />
            </div>
          </div>
          <div className="hero__aboutSection">
            <h1 className="hero__heading">FrontLine Web Developer</h1>
            <div className="hero__content">
              <h3>Love to design Beautiful Websites</h3>
              <p>
                Graduated from <strong>British Computer Society</strong>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
