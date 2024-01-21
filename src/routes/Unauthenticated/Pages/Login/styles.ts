import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const WelcomeContainer = styled(Animatable.View)`
  margin-top: 14%;
  margin-bottom: 4%;
  padding-left: 5%;
`;
export const WelcomeText = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.poppins[700]};
`;

export const LoginForm = styled(Animatable.View)`
  background-color: #fff;
  flex: 1;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 5%;
`;
export const EmailText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.poppins[400]};
`;
export const EmailInput = styled.TextInput<{
  focusable: boolean;
}>`
  font-family: ${({ theme }) => theme.fontFamily.poppins[400]};
  font-size: 12px;
  border-width: 1px;
  padding: 5px 3px 3px 5px;
  border-radius: 5px;
  border-color: ${(props) => (props.focusable ? "#2754cf" : "#a1a1a1")};
  margin-bottom: 10px;
`;
export const PasswordText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.poppins[400]};
`;
export const PasswordInput = styled.TextInput<{
  focusable: boolean;
}>`
  font-family: ${({ theme }) => theme.fontFamily.poppins[400]};
  font-size: 12px;
  border-width: 1px;
  padding: 5px 3px 3px 5px;
  border-radius: 5px;
  border-color: ${(props) => (props.focusable ? "#2754cf" : "#a1a1a1")};
`;
export const ButtonLogin = styled.TouchableOpacity`
  background-color: #2754cf;
  padding: 3%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 5px;
  margin-top: 10px;
`;
export const ButtonLoginText = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.poppins[500]};
  font-size: 15px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  align-items: center;
  margin-top: 4px;
`;
export const ButtonRegisterText = styled.Text`
  color: #a1a1a1;
  font-family: ${({ theme }) => theme.fontFamily.poppins[400]};
`;
