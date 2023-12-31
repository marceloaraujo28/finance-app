import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: column;
  gap: 15px;
`;

export const Photo = styled.View`
  width: 45px;
  height: 45px;
  background-color: #2f2762;
  border-radius: 35px;
  border: 2px solid #000;
  align-items: center;
  justify-content: center;
`;

export const FinanceValueArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const TitleTransaction = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 21px;
  opacity: 0.7;
  margin-top: 15px;
  margin-left: 15px;
`;

export const PhotoName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  color: black;
  font-size: 18px;
  margin-left: 10px;
  flex: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
