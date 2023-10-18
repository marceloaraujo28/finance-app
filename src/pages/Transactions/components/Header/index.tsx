import React, { useState } from "react";
import * as S from "./styles";
import { MonthPicker } from "../../../../components/MonthPicker";
import { MaterialIcons } from "@expo/vector-icons";
import { useTransactionContext } from "../../context";

export function Header() {
  const { date, setDate } = useTransactionContext();

  return (
    <S.Container>
      <S.DatePicker>
        <MonthPicker date={date} onChange={setDate} />
      </S.DatePicker>
      <S.Chart>
        <MaterialIcons name="insert-chart-outlined" size={24} color="white" />
      </S.Chart>
    </S.Container>
  );
}
