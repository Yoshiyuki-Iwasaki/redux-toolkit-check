import { FC } from "react";
import { useForm } from "react-hook-form";
import { Content, InputForm, InputLayout, Overlay } from "./style";

type Props = {
  openFlag: boolean;
  handleClose: any;
};

const Modal: FC<Props> = ({ openFlag, handleClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("test");
  };

  return (
    <>
      {openFlag && (
        <>
          <Overlay onClick={() => handleClose()} />
          <Content>
            <p>モーダル</p>
            <InputForm onSubmit={handleSubmit(onSubmit)}>
              <InputLayout {...register("taskTitle", { required: true })} />
            </InputForm>
            <button onClick={() => handleClose()}>閉じる</button>
          </Content>
        </>
      )}
    </>
  );
};

export default Modal;
