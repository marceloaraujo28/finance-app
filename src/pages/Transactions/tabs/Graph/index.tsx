import { ActivityIndicator, FlatList, Text } from "react-native";
import * as S from "./styles";
import { getSumExpenses } from "../../hooks/getSumExpenses";
import { useAuthContext } from "../../../../context/AuthContext";
import { useTransactionContext } from "../../context";
import { useEffect, useState } from "react";
import {
  CategoriesInfo,
  Category,
} from "../../../../components/Transaction/types";
import { MonthPicker } from "../../../../components/MonthPicker";
import { Card } from "./components/Card";
import { useGetIncomeAndExpense } from "../../../../hooks/useGetIncomeAndExpense";
import { VictoryPie } from "victory-native";
import { Empty } from "../../components/Empty";

type CategoryType = {
  id: number;
  name: string;
  value: number;
  color: string;
  percent: number;
};

export function GraphScreen() {
  const { session } = useAuthContext();
  const { date, setDate } = useTransactionContext();
  const [category, setCategory] = useState<CategoryType[]>();
  const [loading, setLoading] = useState(true);

  async function calculateMonthExpenses() {
    const values = await useGetIncomeAndExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    return values?.expense || 0;
  }

  async function resultSumExpenses() {
    const data = await getSumExpenses({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    const totalDespesas = await calculateMonthExpenses();

    setCategory([]);

    if (data) {
      let idNumber = 0;
      const categoryArray = Object.keys(data).map((categoryName) => {
        const valorItem = data[categoryName as Category];
        const porcentagem = Math.round((valorItem / totalDespesas) * 100);
        let id = idNumber + 1;
        idNumber++;

        return {
          id,
          name: CategoriesInfo[categoryName as Category].translation,
          value: data[categoryName as Category],
          color: CategoriesInfo[categoryName as Category].backgroundColor,
          percent: porcentagem,
        };
      });
      setCategory(categoryArray);
    }
  }

  useEffect(() => {
    async function fetch() {
      await resultSumExpenses();
      setLoading(false);
    }

    fetch();
  }, [date]);

  return (
    <S.GraphContainer>
      <S.SelectDate>
        <MonthPicker date={date} onChange={setDate} color="#000" />
      </S.SelectDate>
      {loading && !category && (
        <S.LoadingContainer>
          <ActivityIndicator color="#000" />
        </S.LoadingContainer>
      )}

      {!loading && category && category?.length < 1 && <Empty />}

      <S.ChartContainer>
        <VictoryPie
          data={category}
          x="name"
          y="value"
          height={300}
          style={{ labels: { fontSize: 10 } }}
          colorScale={category?.map((expense) => expense.color)}
        />
      </S.ChartContainer>
      <FlatList
        data={category}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            value={item.value}
            color={item.color}
            percent={item.percent}
          />
        )}
      />
    </S.GraphContainer>
  );
}
