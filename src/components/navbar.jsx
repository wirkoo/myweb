import MenuIcon from "./menuIcon";
import MenuList from "./menuList";
import Logo from "./logo";

import React, { Component } from "react";

class NavBar extends Component {
  state = {
    listStyle: "items-container hide",
  };

  handleClick = () => {
    let listStyle = this.state.listStyle;

    if (listStyle === "items-container") {
      listStyle = "items-container hide";
      this.setState({ listStyle });
    }
  };
  render() {
    console.log(this.styles);
    const { nameOfItems } = this.props;
    return (
      <>
        <div className="navbar">
          <span>
            <Logo />
            <MenuIcon onClick={this.handleClick} />
            <MenuList styles={this.state.listStyle} nameOfItems={nameOfItems} />
          </span>
        </div>
      </>
    );
  }
}

export default NavBar;
