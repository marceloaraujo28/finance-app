import React from "react";
import * as S from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { addMonths, format, subMonths } from "date-fns";

import pt from "date-fns/locale/pt";
import { View } from "react-native";

type MonthPickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
  color: string;
  arrowLeftVisible?: boolean;
};

export function MonthPicker({
  date,
  onChange,
  color,
  arrowLeftVisible = true,
}: MonthPickerProps) {
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
      {arrowLeftVisible ? (
        <AntDesign
          name="arrowleft"
          size={20}
          color={color}
          onPress={handlePrev}
        />
      ) : (
        <View />
      )}

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
