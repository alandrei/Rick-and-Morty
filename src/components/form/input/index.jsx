import React /*, { memo }*/ from "react";
import "./input.css";

const Input = props => {
  return <input className="input-text" value={props.value} {...props} />;
};

export default Input; // @todo use memoization once enzyme will support it with shallow rendering
