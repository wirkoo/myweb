import React, { Component } from "react";

class Testimonials extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="testimonials container">
          {this.props.testimonials.map((data) => (
            <div className="testifier">
              <h2 className="testifier__heading">{data.name}</h2>
              <p className="testifier__content">{data.content}</p>
              <div className="testifier__rate">
                <span className="rating">
                  <i className="rating__icon fas fa-star"></i>
                  <i className="rating__icon fas fa-star"></i>
                  <i className="rating__icon fas fa-star"></i>
                  <i className="rating__icon fas fa-star"></i>
                  <i className="rating__icon fas fa-star"></i>
                </span>
                <span className="year">{data.date}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Testimonials;
