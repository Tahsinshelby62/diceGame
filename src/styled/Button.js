import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-out;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
