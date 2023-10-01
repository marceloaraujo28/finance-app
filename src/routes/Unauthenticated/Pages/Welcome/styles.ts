import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const LogoContent = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(Animatable.Image)``;

export const MessageContainer = styled(Animatable.View)`
  padding: 5%;
  flex: 1;
`;

export const Message = styled.Text`
  font-size: 24px;
  font-family: "Roboto_700Bold";
  margin-bottom: 20px;
`;
export const Access = styled.Text`
  font-family: "Roboto_400Regular";
  color: #a1a1a1;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  background-color: #2754cf;
  padding: 10px 50px;
  border-radius: 50px;
  color: #fff;
  font-family: "Roboto_500Medium";
  font-size: 18px;
`;
