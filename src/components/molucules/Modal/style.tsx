import styled from "styled-components";

export const Content = styled.div`
  position: fixed;
  width: 300px;
  height: 250px;
  z-index: 1;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputForm = styled.form``;

export const InputLayout = styled.input``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
