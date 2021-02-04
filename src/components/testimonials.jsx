import React, { Component } from "react";

class Testimonials extends Component {
  state = {
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
  };
  render() {
    return (
      <>
        <div className="testimonials container">
          {this.state.testimonials.map((data) => (
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
