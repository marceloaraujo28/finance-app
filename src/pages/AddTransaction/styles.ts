import styled from "styled-components/native";

export const Header = styled.View`
  height: 100px;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
`;

export const InputContent = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
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

export const Title = styled.Text``;

export const Button = styled.TouchableOpacity<{
  disabled: boolean;
}>`
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
  background-color: #00bfff;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`;
