import { InputLayout } from "./style";

const Input = ({ text, onChange }) => {
  return <InputLayout type="text" value={text} onChange={onChange} />;
};

export default Input;
