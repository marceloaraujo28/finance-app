import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";
import { formatValue } from "../../../../../utils/formatValue";
import { ActivityIndicator } from "react-native";

type BalanceInfoProps = {
  name: string;
  value?: string;
  transactionType?: string;
  loading?: boolean;
};

export function BalanceInfo({
  name,
  value,
  transactionType,
  loading,
}: BalanceInfoProps) {
  const valueFormatted = value ? formatValue(value) : "0";

  return (
    <S.Infos>
      <MaterialIcons name="attach-money" size={24} color="#777171" />
      <S.Balances>
        <S.Name>{name}</S.Name>
        <S.Value
          adjustsFontSizeToFit
          numberOfLines={1}
          value={Number(value)}
          transactionType={transactionType}
        >
          {loading ? <ActivityIndicator /> : `R$${valueFormatted}`}
        </S.Value>
      </S.Balances>
    </S.Infos>
  );
}
