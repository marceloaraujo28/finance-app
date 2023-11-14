import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { TextInputMask } from "react-native-masked-text";
import { Dropdown } from "../../components/Dropdown";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import { insertTable } from "./hooks/insertTable";
import {
  Category,
  ITransactions,
  PaymentMethod,
  Transaction,
} from "../../components/Transaction/types";
import { useAuthContext } from "../../context/AuthContext";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { supabase } from "../../config/supabaseConfig";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "../../routes/Authenticated/screens/type";
import { categoriesArray, paymentMethods, transactionTypeArray } from "./utils";

type AddTransactionRouteProp = RouteProp<
  AuthenticatedStackParamList,
  "AddTransaction"
>;

export function AddTransaction() {
  const route = useRoute<AddTransactionRouteProp>();
  const params = route?.params;
  const { session } = useAuthContext();
  const [value, setValue] = useState("0");
  const [oldValue, setOldValue] = useState("0");
  const [oldTransaction, setOldTransaction] = useState<Transaction>("income");
  const [categorie, setCategorie] = useState<Category>(
    categoriesArray[0].value
  );
  const [id, setId] = useState<number | undefined>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState<string | undefined>("");
  const [transactionType, setTransactionType] = useState<Transaction>("income");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Cash");
  const [loading, setLoading] = useState(false);
  const disableButton = value === "0" || !categorie || !name;
  const navigation =
    useNavigation<
      StackNavigationProp<AuthenticatedStackParamList, "AddTransaction">
    >();

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

  async function getTransaction() {
    const { data } = await supabase
      .from("transaction")
      .select("*")
      .eq("id", params?.id)
      .single();

    const { category, name, paymentType, transactionType, value, description } =
      data as ITransactions;

    setDescription(description);
    setTransactionType(transactionType);
    setPaymentMethod(paymentType);
    setCategorie(category), setValue(value);
    setOldValue(value);
    setOldTransaction(transactionType);
    setName(name);
    setId(params.id);
    navigation.setParams({ id: undefined });
  }

  useEffect(() => {
    if (params?.id) {
      getTransaction();
    }
  }, []);

  const handleInsertData = async () => {
    setLoading(true);
    await insertTable({
      value,
      category: categorie,
      name,
      paymentType: paymentMethod,
      transactionType,
      userId: session?.user.id as string,
      description,
      id,
      oldValue,
      oldTransaction,
    });

    setValue("0");
    setName("");
    setDescription("");
    setLoading(false);
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
            {loading && <ActivityIndicator size="small" color="#fff" />}
          </S.Button>
        </ScrollView>
      </S.InputContent>
    </SafeAreaView>
  );
}
