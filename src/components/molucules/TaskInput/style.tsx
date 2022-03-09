import styled from "styled-components";

export const InputForm = styled.form``;

export const InputLayout = styled.input`
  padding: 5px 3px;
  display: block;
  width: 100%;
  border: 1px solid #333;
  font-size: 14px;
`;

export const ButtonArea = styled.div`
  margin-top: 30px;
`;
export const Button = styled.button`
  padding: 5px;
  display: inline-block;
  width: 100%;
  border: 1px solid #333;
`;

export const CancelButton = styled(Button)``;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #333;
  color: #fff;
`;
