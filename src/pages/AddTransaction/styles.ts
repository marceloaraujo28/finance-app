import styled from "styled-components/native";

export const Header = styled.View`
  height: 100px;
  background-color: #32cd32;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
`;

export const InputContent = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  gap: 10px;
`;

export const Input = styled.TextInput`
  border-width: 2px;
  border-radius: 5px;
  border-color: #c0c0c0;
  background-color: #faf9f9;
  padding: 5px 20px;
  font-size: 17px;
  font-family: "Roboto_400Regular";
  color: #464444;
`;

export const Dropdown = styled.View`
  border-width: 2px;
  border-radius: 5px;
  border-color: #c0c0c0;
  background-color: #faf9f9;
`;
