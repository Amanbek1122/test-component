import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <div
      className={`modal ${isOpen ? "open" : ""} ${
        isAnimating ? "animating" : ""
      }`}
      onClick={handleClose}
    >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">{children}</div>
        <button className="modal-close" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
