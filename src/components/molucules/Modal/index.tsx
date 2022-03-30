import { FC } from "react";
import { ModalType } from "./type";
import Presenter from "./presenter";

const Modal: FC<ModalType> = ({ openFlag, handleClose }) => {
  return <Presenter openFlag={openFlag} handleClose={handleClose} />;
};

export default Modal;
