import MenuIcon from "./menuIcon";
import MenuList from "./menuList";
import Logo from "./logo";

import React, { Component } from "react";

class NavBar extends Component {
  state = {};

  render() {
    console.log(this.styles);
    const { nameOfItems } = this.props;

    return (
      <>
        <div className="navbar container">
          <span>
            <MenuList nameOfItems={nameOfItems} />
          </span>
        </div>
      </>
    );
  }
}

export default NavBar;
