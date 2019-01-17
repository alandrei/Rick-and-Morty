import React from "react";

import "./list.css";

const List = ({ items, ...otherProps }) => {
  return (
    <ul className="list" {...otherProps}>
      {Object.keys(items).map(key => (
        <li key={key}>
          <b>{key}</b>
          <span>{items[key]}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
