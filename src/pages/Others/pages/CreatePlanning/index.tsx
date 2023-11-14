import { useState } from "react";
import { Dropdown } from "../../../../components/Dropdown";
import * as S from "./styles";
import { Category } from "../../../../components/Transaction/types";
import { categoriesArray } from "../../../AddTransaction/utils";
import { MonthPicker } from "../../../../components/MonthPicker";
import { TextInputMask } from "react-native-masked-text";
import { ActivityIndicator, Text } from "react-native";
import { useCreatePlanning } from "./hooks/useAddPlanning";
import { useAuthContext } from "../../../../context/AuthContext";

export function CreatePlanning() {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState("0");
  const [loading, setLoading] = useState(false);
  const { session } = useAuthContext();

  const [categorie, setCategorie] = useState<Category>(
    categoriesArray[0].value
  );

  const disableButton = value === "0";

  const handleChangeCategorie = (categorie: string) => {
    setCategorie(categorie as Category);
  };

  const arrowRightVisible = date.getMonth() === new Date().getMonth();

  const handleNumberChange = (value: string) => {
    const formatted = value
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".");

    setValue(formatted);
  };

  const handleInsertPlanning = async () => {
    setLoading(true);
    await useCreatePlanning({
      metaValue: value,
      categorie,
      userId: session?.user.id as string,
    });
    setValue("0");
    setLoading(false);
  };

  return (
    <S.Container>
      <S.Title>Categoria: </S.Title>
      <S.Dropdown>
        <Dropdown
          value={categorie}
          Items={categoriesArray}
          onChangeValue={handleChangeCategorie}
        />
      </S.Dropdown>
      <S.Title>Mês: </S.Title>
      <S.MonthPickerContainer>
        <MonthPicker
          date={date}
          onChange={setDate}
          color="#000"
          arrowLeftVisible={!arrowRightVisible}
        />
      </S.MonthPickerContainer>

      <S.Title>Meta de gasto:</S.Title>
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
        style={{
          fontFamily: "Roboto_700Bold",
          fontSize: 30,
          color: "#000",
        }}
      />
      <S.Button disabled={disableButton} onPress={handleInsertPlanning}>
        <Text>Criar</Text>
        {loading && <ActivityIndicator size="small" color="#fff" />}
      </S.Button>
    </S.Container>
  );
}
