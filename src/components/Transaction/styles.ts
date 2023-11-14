import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const RecentTransaction = styled(Animatable.View)`
  height: 55px;
  margin-top: 10px;
  padding: 5px;
  align-items: center;
  flex-direction: row;
`;

export const TransactionImage = styled.View<{
  background: string;
}>`
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-right: 10px;
  overflow: hidden;
  background-color: ${(props) => props.background};
`;

export const TransactionInfo = styled.View`
  justify-content: space-between;
  height: 100%;
  flex: 1;
`;

export const TransactionName = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
`;
export const TransactionCategory = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 12px;
`;

export const TransactionValueInfo = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-width: 100px;
`;

export const TransactionValue = styled.Text<{
  type: "income" | "expense";
}>`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  color: ${(props) => (props.type === "income" ? "#228b22" : "#FF0000")};
`;

export const paymentType = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 12px;
`;

export const EditStyle = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  background-color: green;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
`;

export const DeleteStyle = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  background-color: red;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;
