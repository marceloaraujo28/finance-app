import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext";
import { searchPanning } from "./hooks/searchPlanning";
import * as S from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { SearchPlanningResponse } from "./hooks/types";
import { PlanningCard } from "./components/PlanningCard";
import { ActivityIndicator, Text, View } from "react-native";
import { deletePlanning } from "./hooks/deletePlanning";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { OthersStackParamList } from "../../types";

export function Planning() {
  const { session } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [planningData, setPlanningdata] = useState<SearchPlanningResponse[]>(
    []
  );
  const [updateListPlanning, setUpdateListPlanning] = useState(false);
  const navigation =
    useNavigation<StackNavigationProp<OthersStackParamList, "Planning">>();

  const isFocused = useIsFocused();

  const searchPlanningRecents = async () => {
    const data = await searchPanning({ userId: session?.user.id as string });
    setPlanningdata(data);
  };

  const onDelete = async (id: number) => {
    await deletePlanning({ id });
    setUpdateListPlanning(true);
  };

  function onEdit(id: number) {
    navigation.navigate("CreatePlanning", {
      id,
    });
  }

  useEffect(() => {
    async function fetchData() {
      await searchPlanningRecents();
      setUpdateListPlanning(false);
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, [updateListPlanning, isFocused]);

  return (
    <S.Container>
      {loading && <ActivityIndicator />}
      {!loading && !planningData?.length && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Você não possui nenhum planejamento</Text>
        </View>
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
              handleEdit={onEdit}
            />
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      ) : null}
    </S.Container>
  );
}
