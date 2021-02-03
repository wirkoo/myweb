import React from "react";

const MenuIcon = (props) => {
  const { onClick } = props;
  return <i onClick={onClick} className="menu-icon fas fa-bars"></i>;
};

export default MenuIcon;
