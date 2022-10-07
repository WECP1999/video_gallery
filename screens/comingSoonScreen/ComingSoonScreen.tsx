import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Video from "../../components/video";
import comingSoonCollection from "../../constants/mocks/comingSoon.mock";

const ComingSoonScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {comingSoonCollection.map((item, index) => (
        <View key={item.id}>
          <Video uri={item.trailerUri} />
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.category}>
              Categoria:
              <Text style={{ fontWeight: "400" }}> {item.category}</Text>
            </Text>
            <Text style={styles.category}>
              Fecha de estreno:
              <Text style={{ fontWeight: "400" }}> {item.releaseDate}</Text>
            </Text>
          </View>
          {index + 1 < comingSoonCollection.length && (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "rgb(237, 241, 247);",
                position: "absolute",
                zIndex: 1,
                top: -8,
              }}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default ComingSoonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    position: "relative"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  detailContainer: {
    marginVertical: 16,
  },
});
