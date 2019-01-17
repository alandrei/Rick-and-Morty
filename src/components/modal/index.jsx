import React from "react";
import "./modal.css";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="close" onClick={onClose}>
          Close
        </div>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
