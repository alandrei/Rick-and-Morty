import React, { memo } from "react";
import "./input.css";

const Input = props => {
  return <input className="input-text" value={props.value} {...props} />;
};

export default memo(Input);
