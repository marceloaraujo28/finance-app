import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";
import { formatValue } from "../../../../../utils/formatValue";

type BalanceInfoProps = {
  name: string;
  value?: string;
  transactionType?: string;
};

export function BalanceInfo({
  name,
  value,
  transactionType,
}: BalanceInfoProps) {
  const valueFormatted = value ? formatValue(value) : "0";

  return (
    <S.Infos>
      <MaterialIcons name="attach-money" size={24} color="#777171" />
      <S.Balances>
        <S.Name>{name}</S.Name>
        <S.Value value={Number(value)} transactionType={transactionType}>
          R${valueFormatted}
        </S.Value>
      </S.Balances>
    </S.Infos>
  );
}
