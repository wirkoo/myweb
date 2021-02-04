import React, { Component } from "react";
class HeadinBlock extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="heading__block">
          <h3>{this.props.heading}</h3>
        </div>
      </>
    );
  }
}

export default HeadinBlock;
