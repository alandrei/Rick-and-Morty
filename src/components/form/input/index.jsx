import React /* , { memo } */ from 'react';
import './input.css';

const Input = props => <input className="input-text" {...props} />;

export default Input; // @todo use memoization once enzyme will support it with shallow rendering
