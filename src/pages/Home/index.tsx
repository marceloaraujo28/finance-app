import { StatusBar, View, Text } from "react-native";
import * as S from "./styles";
import { Card } from "../../components/Card";
import { BalanceFinancial } from "../../components/BalanceFinancial";

export function Home() {
  const statusBarHeight = StatusBar.currentHeight ?? 28;

  return (
    <S.Container>
      <View
        style={{
          height: 450,
          backgroundColor: "white",
          elevation: 4,
          shadowOffset: { width: 5, height: 5 },
          shadowColor: "grey",
          shadowOpacity: 0.5,
          shadowRadius: 10,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <S.Header top={statusBarHeight}>
          <S.Photo>
            <Text>Foto</Text>
          </S.Photo>
          <S.CardContent>
            <Card balance={1000} cardName="Marcelo Messias Araújo" />
          </S.CardContent>
          <S.FinanceValueArea>
            <BalanceFinancial name="Receitas" value={50000} type="up" />
            <BalanceFinancial name="Despesas" value={10000} type="down" />
          </S.FinanceValueArea>
        </S.Header>
      </View>
    </S.Container>
  );
}
