import React from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ISeries from "../../../utils/interfaces/ISeries";
import {
  RootStackParamList,
  RootTabParamList,
} from "../../../utils/types/types";
import { Text, View } from "../../Themed";
import ISelectedItem from "../../../utils/interfaces/ISelectedItem";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

type SerieDetailProp = {
  serie: ISeries;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, "Series", undefined>,
    NativeStackNavigationProp<RootStackParamList, "Root", undefined>
  >;
  category: number;
};
const SerieDetail = ({ serie, category, navigation }: SerieDetailProp) => {
  const { setItem } = useAsyncStorage("@selectedItem");

  const onPress = React.useCallback(async () => {
    const data: ISelectedItem = {
      type: "serie",
      id: serie.id,
      category,
    };
    await setItem(JSON.stringify(data));
    navigation.navigate("MovieDetail");
  }, []);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: serie.imagePreview,
          }}
          resizeMode='stretch'
          style={{
            width: 100,
            height: 140,
          }}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>{serie.name}</Text>
          <Text style={styles.detailDescription}>
            Temporadas:{" "}
            <Text style={{ fontWeight: "bold" }}>{serie.seasons}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 8,
  },
  detailContainer: {
    marginLeft: 32,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailDescription: {
    marginLeft: 16,
  },
});

export default SerieDetail;
