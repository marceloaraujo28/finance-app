import styled from "styled-components/native";

export const GeralContainer = styled.View`
  flex: 1;
  background-color: #2754cf;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 5px;
  background-color: white;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  padding: 0px 10px;
`;

export const Header = styled.View`
  height: 50px;
  border-bottom-width: 0.5px;
  border-bottom-color: #aaa4a4;
  align-items: center;
  flex-direction: row;
  padding: 10px 0px;
`;

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
export const Value = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 13px;
`;

// Roboto_500Medium,
//   Roboto_700Bold,
