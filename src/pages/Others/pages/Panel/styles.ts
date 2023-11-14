import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff;
  gap: 40px;
`;

export const CardItem = styled.TouchableOpacity`
  width: 130px;
  height: 130px;
  border: 2px solid #4f4f4f;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Text = styled.Text`
  font-family: "Roboto_500Medium";
  text-align: center;
`;
