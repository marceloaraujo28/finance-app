import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #f0f8ff;
  flex: 1;
`;

export const Header = styled.View<{
  top: number;
}>`
  margin-top: ${(props) => props.top}px;
  height: 50px;
`;

export const Photo = styled.View`
  width: 50px;
  height: 50px;
  background-color: #2f2762;
  border-radius: 35px;
  border: 2px solid #000;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.View`
  margin-top: 25px;
`;

export const FinanceValueArea = styled.View`
  height: 80px;
  margin-top: 17px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
