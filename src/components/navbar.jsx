import MenuIcon from "./menuIcon";
import MenuList from "./menuList";
import Logo from "./logo";

import React, { Component } from "react";

class NavBar extends Component {
  state = {
    menuItems: [
      { id: 1, name: "about me" },
      { id: 2, name: "Portfolio" },
      { id: 3, name: "Blog" },
      { id: 4, name: "Contact" },
    ],
  };

  render() {
    console.log(this.styles);

    return (
      <>
        <div className="navbar container">
          <span>
            <MenuList nameOfItems={this.state.menuItems} />
          </span>
        </div>
      </>
    );
  }
}

export default NavBar;
