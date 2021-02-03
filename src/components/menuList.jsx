import React from "react";

const MenuList = (props) => {
  const { nameOfItems, styles } = props;
  return (
    <>
      <ul className={styles}>
        {nameOfItems.map((item) => (
          <li key={item.id} className="item">
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuList;
