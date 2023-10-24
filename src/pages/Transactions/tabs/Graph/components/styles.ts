import styled from "styled-components/native";

export const CardContainer = styled.View`
  height: 50px;
  background-color: #fff;
  flex-direction: row;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  overflow: hidden;
`;

export const Bar = styled.View<{
  color: string;
}>`
  background-color: ${(props) => props.color};
  width: 10px;
`;

export const Name = styled.Text`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 13px;
  font-family: "Roboto_700Bold";
`;

export const Value = styled.Text`
  margin-right: 20px;
  align-self: center;
  font-size: 14px;
  font-family: "Roboto_500Medium";
`;

export const Percent = styled.Text`
  align-self: center;
  margin-right: 20px;
  font-size: 13px;
  font-family: "Roboto_500Medium";
  color: #a9a9a9;
`;
