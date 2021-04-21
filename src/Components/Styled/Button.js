import styled from "styled-components";

export default styled.button`
  text-align: center;
  background-color: var(--color-1);
  color: white;
  width: 135px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;

  &:hover {
    background-color: var(--color-5);
    color: var(--color-2);
  }
`;
