import React, { Component } from "react";
import waleed from "../images/waleed.jpg";
class Hero extends Component {
  state = {};
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
            <h1 className="hero__heading">{this.props.data.heading}</h1>
            <div className="hero__content">
              <h3>{this.props.data.motive}</h3>
              <p>{this.props.data.school}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
