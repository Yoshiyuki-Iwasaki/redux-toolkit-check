import styled from "styled-components";

export const ListItem = styled.li`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333;

  &:first-child {
    margin-top: 0;
  }
`;

export const ButtonArea = styled.li``;

export const Button = styled.button`
  background: #333;
  padding: 5px;
  color: #fff;
`;

export const EditButton = styled(Button)``;

export const RemoveButton = styled(Button)`
  margin-left: 10px;
`;
