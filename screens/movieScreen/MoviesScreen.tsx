import { ScrollView, StyleSheet } from "react-native";
import MovieCarousel from "../../components/movies/movieCarousel";
import { Text, View } from "../../components/Themed";
import movieCollection from "../../constants/mocks/movies.mock";
import { RootTabScreenProps } from "../../utils/types/types";

const MovieScreen = ({ navigation }: RootTabScreenProps<"Movies">) => {
  return (
    <ScrollView style={styles.container}>
      {movieCollection.map((category) => (
        <View key={category.id}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 16 }}>
            {category.category}
          </Text>
          <MovieCarousel
            movies={category.movies}
            category={category.id}
            navigation={navigation}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default MovieScreen;
