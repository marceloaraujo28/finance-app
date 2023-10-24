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
  justify-content: space-between;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
