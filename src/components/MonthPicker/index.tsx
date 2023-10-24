import React from "react";
import * as S from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { addMonths, format, subMonths } from "date-fns";

import pt from "date-fns/locale/pt";

type MonthPickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
  color: string;
};

export function MonthPicker({ date, onChange, color }: MonthPickerProps) {
  const handlePrev = () => {
    const newDate = subMonths(date, 1);
    onChange(newDate);
  };

  const handleNext = () => {
    const newDate = addMonths(date, 1);
    onChange(newDate);
  };

  return (
    <S.Container>
      <AntDesign
        name="arrowleft"
        size={20}
        color={color}
        onPress={handlePrev}
      />
      <S.Date color={color}>
        {format(date, "MMMM, yyyy", { locale: pt })}
      </S.Date>
      <AntDesign
        name="arrowright"
        size={20}
        color={color}
        onPress={handleNext}
      />
    </S.Container>
  );
}
