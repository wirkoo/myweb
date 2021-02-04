import React, { Component } from "react";

class Achievements extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.data.map((d) => (
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
