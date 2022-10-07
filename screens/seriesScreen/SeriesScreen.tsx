import { StyleSheet, ScrollView } from "react-native";
import SerieDetail from "../../components/series/serieDetail";
import { Text, View } from "../../components/Themed";
import seriesCollection from "../../constants/mocks/series.mock";
import { RootTabScreenProps } from "../../utils/types/types";

const SeriesScreen = ({ navigation }: RootTabScreenProps<"Series">) => {
  return (
    <ScrollView style={styles.container}>
      {seriesCollection.map((category) => (
        <View key={category.id}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", marginVertical: 16 }}
          >
            {category.category}
          </Text>
          {category.movies.map((serie) => (
            <View key={serie.id}>
              <View style={styles.separator} />
              <SerieDetail
                serie={serie}
                category={category.id}
                navigation={navigation}
              />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default SeriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "rgb(221, 228, 237);",
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
});
