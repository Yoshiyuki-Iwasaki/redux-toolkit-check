import React from "react";
import { ModalType } from "./type";
import Presenter from "./presenter";

const Modal: React.FC<ModalType> = ({ openFlag, handleClose }) => {
  return <Presenter openFlag={openFlag} handleClose={handleClose} />;
};

export default Modal;
