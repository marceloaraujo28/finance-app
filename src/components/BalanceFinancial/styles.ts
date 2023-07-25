import styled from "styled-components/native";

export const BalanceFinancial = styled.View`
  height: 45px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View<{
  type: "up" | "down";
}>`
  width: 25px;
  height: 25px;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 22px;
  border-radius: 30px;
  background-color: ${(props) => (props.type === "up" ? "#228b22" : "#FF4500")};
`;

export const Info = styled.View`
  height: 100%;
  margin-left: 5px;
`;

export const Name = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  opacity: 0.7;
`;

export const Value = styled.Text<{
  type: "up" | "down";
}>`
  font-family: "Roboto_700Bold";
  font-size: 20px;
  color: ${(props) => (props.type === "up" ? "#228b22" : "#FF0000")};
`;
