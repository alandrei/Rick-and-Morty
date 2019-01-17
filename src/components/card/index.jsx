import React /* , { memo } */ from 'react';

import './card.css';

const Card = ({ image, title, tabIndex = -1, ...otherProps }) => (
    <div className="card" {...otherProps} role="button" tabIndex={tabIndex + 2}>
        <img src={image} alt={title} className="image" />
        <h3 className="title">{title}</h3>
    </div>
);

export default Card; // @todo use memoization once enzyme will support it with shallow rendering
