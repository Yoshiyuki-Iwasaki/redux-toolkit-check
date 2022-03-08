import React from "react";
import { Content, Overlay } from "./style";
import TaskInput from "../TaskInput";

type Props = {
  openFlag: boolean;
  handleClose: any;
};

const Modal: React.FC<Props> = ({ openFlag, handleClose }) => {
  return (
    <>
      {openFlag && (
        <>
          <Overlay onClick={() => handleClose()} />
          <Content>
            <TaskInput edit />
          </Content>
        </>
      )}
    </>
  );
};

export default Modal;
