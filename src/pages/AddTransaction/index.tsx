import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { TextInputMask } from "react-native-masked-text";
import { Dropdown } from "../../components/Dropdown";
import { ICategoryItem, IPaymentMethods, ITransactionTypes } from "./types";
import { ScrollView, Text, TextInput } from "react-native";
import { insertTable } from "./hooks/insertTable";
import {
  Category,
  PaymentMethod,
  Transaction,
} from "../../components/Transaction/types";
import { useAuthContext } from "../../context/AuthContext";

const categoriesArray: ICategoryItem[] = [
  { id: 1, label: "Moradia", value: "Housing" },
  { id: 2, label: "Alimentação", value: "Food" },
  { id: 3, label: "Transporte", value: "Transportation" },
  { id: 4, label: "Saúde", value: "Health" },
  { id: 5, label: "Educação", value: "Education" },
  { id: 6, label: "Lazer", value: "Leisure" },
  { id: 6, label: "Trabalho", value: "Work" },
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
  const { session } = useAuthContext();
  const [value, setValue] = useState("0");
  const [categorie, setCategorie] = useState<Category>(
    categoriesArray[0].value
  );
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState<Transaction>("income");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Cash");
  const disableButton = !value || !categorie || !name || !description;

  const handleChangeCategorie = (categorie: string) => {
    setCategorie(categorie as Category);
  };

  const handleChangeTransactionType = (type: string) => {
    setTransactionType(type as Transaction);
  };

  const handleChangePaymentMethod = (payment: string) => {
    setPaymentMethod(payment as PaymentMethod);
  };

  const handleNumberChange = (value: string) => {
    const formatted = value
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".");

    setValue(formatted);
  };

  const handleInsertData = async () => {
    await insertTable({
      value,
      category: categorie,
      name,
      paymentType: paymentMethod,
      transactionType,
      userId: session?.user.id as string,
      description,
    });

    setValue("0");
    setName("");
    setDescription("");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: `${
          transactionType === "income" ? "#32cd32" : "#ad2a0a"
        }`,
      }}
    >
      <S.Header>
        <TextInputMask
          placeholder="0,00"
          type={"money"}
          options={{
            precision: 2,
            separator: ",",
            delimiter: ".",
          }}
          value={value}
          onChangeText={handleNumberChange}
          caretHidden={true}
          style={{ fontFamily: "Roboto_700Bold", fontSize: 30, color: "#fff" }}
        />
      </S.Header>
      <S.InputContent>
        <ScrollView>
          <S.Title>Tipo da transação: </S.Title>
          <S.Dropdown>
            <Dropdown
              value={transactionType}
              Items={transactionTypeArray}
              onChangeValue={handleChangeTransactionType}
            />
          </S.Dropdown>
          <S.Title>Nome da transação: </S.Title>
          <S.Input onChangeText={setName} value={name} />
          <S.Title>Descrição: </S.Title>
          <S.Input onChangeText={setDescription} value={description} />
          <S.Title>Categoria: </S.Title>
          <S.Dropdown>
            <Dropdown
              value={categorie}
              Items={categoriesArray}
              onChangeValue={handleChangeCategorie}
            />
          </S.Dropdown>
          <S.Title>Metodo de pagamento: </S.Title>
          <S.Dropdown>
            <Dropdown
              value={paymentMethod}
              Items={paymentMethods}
              onChangeValue={handleChangePaymentMethod}
            />
          </S.Dropdown>
          <S.Button onPress={handleInsertData} disabled={disableButton}>
            <Text>Registrar</Text>
          </S.Button>
        </ScrollView>
      </S.InputContent>
    </SafeAreaView>
  );
}
