import { FC } from "react";
import Checkbox from "../../atoms/checkbox";
import Modal from "../Modal";
import Button from "../../atoms/button";
import { ListItem, ButtonArea, ButtonLayout } from "./style";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({
  task,
  handleOpenTask,
  handleCloseTask,
  handleRemoveTask,
  handleCompleteTask,
  isModalOpen,
}) => {
  return (
    <ListItem>
      <Checkbox
        onClick={() => handleCompleteTask()}
        done={task.completed}
        title={task.title}
      />
      <ButtonArea>
        <ButtonLayout>
          <Button onClick={() => handleOpenTask()}>編集</Button>
        </ButtonLayout>
        <ButtonLayout>
          <Button onClick={() => handleRemoveTask()}>削除</Button>
        </ButtonLayout>
      </ButtonArea>
      <Modal openFlag={isModalOpen} handleClose={handleCloseTask} />
    </ListItem>
  );
};

export default Presenter;
