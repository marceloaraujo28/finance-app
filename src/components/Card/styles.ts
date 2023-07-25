import styled from "styled-components/native";

export const Card = styled.View`
  height: 200px;
  background-color: black;
  border-radius: 20px;
  background-color: #2f2762;
  border: 1px solid black;
  flex-direction: column;
`;

export const InfosCard = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const LeftCard = styled.View`
  width: 50%;
  height: 100%;
  padding-top: 25px;
  padding-left: 20px;
`;

export const TextBalance = styled.Text`
  font-size: 15px;
  font-family: "Roboto_500Medium";
  color: #fff;
  opacity: 0.7;
`;

export const ValueBalance = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 29px;
  margin-top: 11px;
  color: #fff;
`;

export const RightCard = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const InfoPerson = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  height: 50px;
  border-radius: 0 0 20px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardName = styled.Text`
  font-size: 15px;
  font-family: "Roboto_400Regular";
  color: #fff;
  opacity: 0.7;
  margin-left: 20px;
`;
