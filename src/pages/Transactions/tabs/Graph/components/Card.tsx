import { formatValue } from "../../../../../utils/formatValue";
import * as S from "./styles";

type CardProps = {
  name: string;
  value: number;
  color: string;
  percent: number;
};

export function Card({ name, value, color, percent }: CardProps) {
  return (
    <S.CardContainer>
      <S.Bar color={color} />
      <S.Name>{name}</S.Name>
      <S.Value>R${formatValue(String(value))}</S.Value>
      <S.Percent>{percent}%</S.Percent>
    </S.CardContainer>
  );
}
