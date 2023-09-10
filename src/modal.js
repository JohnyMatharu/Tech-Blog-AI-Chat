import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, link, category, index, github } = currentPhoto;


  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`./assets/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{link}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};
export default Modal;
