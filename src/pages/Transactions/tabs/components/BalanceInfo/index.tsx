import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

type BalanceInfoProps = {
  name: string;
  value: string;
};

export function BalanceInfo({ name, value }: BalanceInfoProps) {
  return (
    <S.Infos>
      <MaterialIcons name="attach-money" size={24} color="#777171" />
      <S.Balances>
        <S.Name>{name}</S.Name>
        <S.Value>R${value}</S.Value>
      </S.Balances>
    </S.Infos>
  );
}
