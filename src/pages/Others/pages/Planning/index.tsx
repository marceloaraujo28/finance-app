import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext";
import { searchPanning } from "./hooks/searchPlanning";
import * as S from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { SearchPlanningResponse } from "./hooks/types";
import { PlanningCard } from "./components/PlanningCard";
import { ActivityIndicator, Text } from "react-native";
import { deletePlanning } from "./hooks/deletePlanning";

export function Planning() {
  const { session } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [planningData, setPlanningdata] = useState<SearchPlanningResponse[]>(
    []
  );
  const [updateListPlanning, setUpdateListPlanning] = useState(false);

  const searchPlanningRecents = async () => {
    const data = await searchPanning({ userId: session?.user.id as string });
    setPlanningdata(data);
  };

  const onDelete = async (id: number) => {
    await deletePlanning({ id });
    setUpdateListPlanning(true);
  };

  useEffect(() => {
    async function fetchData() {
      await searchPlanningRecents();
      setUpdateListPlanning(false);
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, [updateListPlanning]);

  return (
    <S.Container>
      {loading && <ActivityIndicator />}
      {!loading && !planningData?.length && (
        <Text>Você não possui nenhum planejamento</Text>
      )}
      {!loading && planningData?.length ? (
        <FlatList
          data={planningData}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <PlanningCard
              id={item.id}
              created_at={item.created_at}
              categorie={item.categorie}
              metaValue={item.metaValue}
              handleDelete={onDelete}
            />
          )}
        />
      ) : null}
    </S.Container>
  );
}
