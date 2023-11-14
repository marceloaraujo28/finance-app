import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  background-color: #fff;
  flex: 1;
`;
export const Title = styled.Text`
  margin-bottom: 15px;
  font-family: "Roboto_700Bold";
`;

export const Dropdown = styled.View`
  border-width: 2px;
  border-radius: 5px;
  border-color: #c0c0c0;
  background-color: #faf9f9;
  margin-bottom: 10px;
`;

export const MonthPickerContainer = styled.View`
  margin-bottom: 10px;
`;

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
