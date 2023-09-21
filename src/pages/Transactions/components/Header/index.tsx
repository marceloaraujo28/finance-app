import React, { useState } from "react";
import * as S from "./styles";
import { MonthPicker } from "../../../../components/MonthPicker";
import { MaterialIcons } from "@expo/vector-icons";

export function Header() {
  const [date, setDate] = useState(new Date());

  return (
    <S.Container>
      <S.DatePicker>
        <MonthPicker date={date} />
      </S.DatePicker>
      <S.Chart>
        <MaterialIcons name="insert-chart-outlined" size={24} color="white" />
      </S.Chart>
    </S.Container>
  );
}
