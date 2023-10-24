import React, { useState } from "react";
import * as S from "./styles";
import { MonthPicker } from "../../../../components/MonthPicker";
import { MaterialIcons } from "@expo/vector-icons";
import { useTransactionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TransactionsStackParamList } from "../../type";

export function Header() {
  const { date, setDate } = useTransactionContext();

  const navigation =
    useNavigation<
      StackNavigationProp<TransactionsStackParamList, "TransactionsPage">
    >();

  function handleOnPress() {
    navigation.navigate("GraphScreen");
  }

  return (
    <S.Container>
      <S.DatePicker>
        <MonthPicker date={date} onChange={setDate} color="#fff" />
      </S.DatePicker>
      <S.Chart onPress={handleOnPress}>
        <MaterialIcons name="insert-chart-outlined" size={24} color="white" />
      </S.Chart>
    </S.Container>
  );
}
