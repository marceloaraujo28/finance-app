import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8ff;
  padding: 10px;
`;

export const Profile = styled.View`
  margin-top: 20px;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled.View`
  width: 45px;
  height: 45px;
  background-color: #2f2762;
  border-radius: 35px;
  border: 2px solid #000;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-family: "Roboto_500Medium";
`;

export const Email = styled.Text`
  font-size: 13px;
`;

export const Items = styled.View`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 7px;
  gap: 20px;
`;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const ItemName = styled.Text``;
