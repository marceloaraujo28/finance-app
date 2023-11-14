import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const PlanningContainer = styled(Animatable.View)`
  background-color: #fff;
  border: 1px solid #eae4e4;
  border-radius: 5px;
`;
export const Infos = styled.View`
  flex-direction: row;
  padding: 5px;
`;

export const Bar = styled.View<{
  background: string;
}>`
  width: 3px;
  height: 100%;
  background-color: ${(props) => props.background};
`;

export const PhotoCategory = styled.View`
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
export const TitleAndDate = styled.View`
  flex: 1;
  padding-left: 20px;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-family: "Roboto_700Bold";
  color: #8d8888;
`;
export const Date = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 13px;
`;
export const ValueInfo = styled.View`
  align-items: center;
`;
export const ValueTitle = styled.Text`
  font-family: "Roboto_500Medium";
  color: #8d8888;
`;
export const Value = styled.Text`
  font-family: "Roboto_700Bold";
`;
export const ProgressContainer = styled.View`
  gap: 5px;
  padding: 5px;
  border-top-width: 0.5px;
  border-top-color: #eae4e4;
`;

export const ProgressValueContainer = styled.View``;
export const ProgressValue = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 12px;
`;

export const ProgressBarContainer = styled.View`
  background-color: #f0f8ff;
  height: 17px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #eae4e4;
`;

export const Percent = styled.Text`
  font-size: 10px;
  margin-right: 10px;
`;

export const ProgressBar = styled(Animatable.View)<{
  percent: number;
}>`
  width: ${(props) => props.percent}%;
  height: 100%;
  background-color: ${(props) =>
    props.percent >= 100 ? "#FF4500" : "#1749d1"};
  align-items: flex-end;
  justify-content: center;
`;

export const EditStyle = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  background-color: green;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

export const DeleteStyle = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  background-color: red;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

export const ProgressBarPercent = styled.Text<{
  percent: number;
}>`
  text-align: center;
  font-size: 12px;
  color: ${(props) => (props.percent > 100 ? "#FF4500" : "#000")};
`;
