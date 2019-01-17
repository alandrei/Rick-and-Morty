import React from "react";

import "./card.css";

const Card = ({ image, title, ...otherProps }) => {
  return (
    <div className="card" {...otherProps}>
      <img src={image} alt={title} className="image" />
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default Card;
