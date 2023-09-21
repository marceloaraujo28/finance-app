import React from "react";
import * as S from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { format } from "date-fns";

import pt from "date-fns/locale/pt";

type MonthPickerProps = {
  date: Date;
};

export function MonthPicker({ date }: MonthPickerProps) {
  return (
    <S.Container>
      <AntDesign name="arrowleft" size={20} color="#fff" />
      <S.Date>{format(date, "MMMM", { locale: pt })}</S.Date>
      <AntDesign name="arrowright" size={20} color="#fff" />
    </S.Container>
  );
}
