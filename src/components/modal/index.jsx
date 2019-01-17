import React from 'react';
import './modal.css';
//* eslint-
const Modal = ({ title, children, onClose }) => (
    <div className="modal-wrapper">
        <div className="modal">
            <div className="close" onClick={onClose} role="button" tabIndex={-1} onKeyDown={onClose}>
                Close
            </div>
            <h2 className="modal-title">{title}</h2>
            <div className="modal-content">{children}</div>
        </div>
    </div>
);

export default Modal;
