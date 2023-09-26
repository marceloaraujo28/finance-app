import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { TextInputMask } from "react-native-masked-text";
import { Dropdown } from "../../components/Dropdown";
import { ICategoryItem, IPaymentMethods, ITransactionTypes } from "./types";

const categoriesArray: ICategoryItem[] = [
  { id: 1, label: "Moradia", value: "Housing" },
  { id: 2, label: "Alimentação", value: "Food" },
  { id: 3, label: "Transporte", value: "Transportation" },
  { id: 4, label: "Saúde", value: "Health" },
  { id: 5, label: "Educação", value: "Education" },
  { id: 6, label: "Lazer", value: "Leisure" },
  { id: 7, label: "Outros", value: "Others" },
];

const transactionTypeArray: ITransactionTypes[] = [
  { id: 1, label: "Receita", value: "income" },
  { id: 2, label: "Despesa", value: "expense" },
];

const paymentMethods: IPaymentMethods[] = [
  { id: 1, label: "Dinheiro", value: "Cash" },
  { id: 2, label: "PIX", value: "PIX" },
  { id: 3, label: "Cartão", value: "Card" },
  { id: 1, label: "Outros", value: "Other" },
];

export function AddTransaction() {
  const [value, setValue] = useState("0");
  const [categorie, setCategorie] = useState<string>(categoriesArray[0].value);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState<string>("income");
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  const handleChangeCategorie = (categorie: string) => {
    setCategorie(categorie);
  };

  const handleChangeTransactionType = (type: string) => {
    setTransactionType(type);
  };

  const handleChangePaymentMethod = (payment: string) => {
    setPaymentMethod(payment);
  };

  const handleNumberChange = (formatted?: string) => {
    setValue(formatted ?? "0");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#32cd32" }}>
      <S.Header>
        <TextInputMask
          placeholder="0,00"
          type={"money"}
          options={{
            precision: 2,
            separator: ",",
            delimiter: ".",
            unit: "R$",
          }}
          value={value}
          onChangeText={handleNumberChange}
          caretHidden={true}
          style={{ fontFamily: "Roboto_700Bold", fontSize: 30, color: "#fff" }}
        />
      </S.Header>
      <S.InputContent>
        <S.Dropdown>
          <Dropdown
            value={transactionType}
            Items={transactionTypeArray}
            onChangeValue={handleChangeTransactionType}
          />
        </S.Dropdown>
        <S.Input placeholder="Nome da transação" onChangeText={setName} />
        <S.Input placeholder="Descrição" onChangeText={setDescription} />
        <S.Dropdown>
          <Dropdown
            value={categorie}
            Items={categoriesArray}
            onChangeValue={handleChangeCategorie}
          />
        </S.Dropdown>
        <S.Dropdown>
          <Dropdown
            value={paymentMethod}
            Items={paymentMethods}
            onChangeValue={handleChangePaymentMethod}
          />
        </S.Dropdown>
      </S.InputContent>
    </SafeAreaView>
  );
}