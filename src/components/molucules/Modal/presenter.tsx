import { FC } from "react";
import { Content, Overlay } from "./style";
import TaskInput from "../TaskInput";
import { ModalType } from "./type";

const Presenter: FC<ModalType> = ({ openFlag, handleClose }) => {
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

export default Presenter;
