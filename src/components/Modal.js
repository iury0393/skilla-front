import React from "react";
import ModalWrapper from "../styles/Modal";

const Modal = ({ children }) => {
  return (
    <ModalWrapper>
      <div className="modal-content">{children}</div>
    </ModalWrapper>
  );
};

export default Modal;
