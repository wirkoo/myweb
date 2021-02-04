import React, { Component } from "react";

import { Link } from "react-router-dom";
class MenuList extends Component {
  state = {
    tester: 1,
  };
  changeTester = () => {
    console.log(this.state.tester);
    this.setState({ tester: this.state.tester + 1 });
  };
  render() {
    const { nameOfItems } = this.props;
    let style =
      this.state.tester % 2 === 0 ? "items-container" : "items-container hide";

    return (
      <>
        <i onClick={this.changeTester} className="menu-icon fas fa-bars"></i>

        <ul className={style}>
          {nameOfItems.map((item) => (
            <li key={item.id} className="item">
              <Link to={item.name}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MenuList;
