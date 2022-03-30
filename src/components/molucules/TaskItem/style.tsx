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

export const ButtonArea = styled.li`
  display: flex;
`;
export const ButtonLayout = styled.div`
  padding: 0 5px;
`;
