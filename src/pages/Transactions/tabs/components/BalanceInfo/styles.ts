import styled from "styled-components/native";

export const Infos = styled.View`
  height: 35px;
  flex-direction: row;
  gap: 2px;
  align-items: center;
`;

export const Balances = styled.View`
  justify-content: space-between;
  height: 100%;
`;
export const Name = styled.Text`
  font-size: 12px;
  font-family: "Roboto_500Medium";
  color: #4b4646;
`;
export const Value = styled.Text<{
  value: number;
  transactionType?: string;
}>`
  font-family: "Roboto_500Medium";
  font-size: 13px;
  color: ${(props) =>
    props.value >= 0 && props.transactionType !== "expense"
      ? "#228b22"
      : "#FF0000"};
`;
