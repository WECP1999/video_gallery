import React from "react";
import {
  StyleSheet,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import movieCollection from "../../constants/mocks/movies.mock";
import seriesCollection from "../../constants/mocks/series.mock";
import IMovie from "../../utils/interfaces/IMovie";
import ISeries from "../../utils/interfaces/ISeries";
import ISelectedItem from "../../utils/interfaces/ISelectedItem";

type GenericCollection = {
  id: number;
  name: string;
  trailerUri: string;
  imagePreview: string;
};

const ModalScreen = () => {
  const [selectedTitle, setSelectedTitle] = React.useState<GenericCollection>();
  const { getItem, removeItem } = useAsyncStorage("@selectedItem");

  React.useEffect(() => {
    const getAsyncItem = async () => {
      try {
        const response = await getItem();
        if (response) {
          const parsed = JSON.parse(response) as ISelectedItem;
          let itemCollection: GenericCollection[] = [];

          if (parsed.type === "movie") {
            itemCollection = movieCollection.find(
              (collection) => collection.id === parsed.category
            )?.movies as IMovie[];
          } else {
            itemCollection = seriesCollection.find(
              (collection) => collection.id === parsed.category
            )?.movies as ISeries[];
          }

          const item = itemCollection.find(({ id }) => id === parsed.id);
          if (item) {
            setSelectedTitle(item);
          }
        }
      } catch (error) {
        Alert.alert("Something went Wrong");
      }
    };
    getAsyncItem();
    return () => {
      removeItem();
    };
  }, []);

  const handlePress = React.useCallback(async () => {
    if (selectedTitle) {
      const { trailerUri } = selectedTitle;
      const supported = await Linking.canOpenURL(trailerUri);

      if (supported) {
        await Linking.openURL(trailerUri);
      } else {
        Alert.alert(`Don't know how to open this URL: ${trailerUri}`);
      }
    }
  }, [selectedTitle]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedTitle?.name}</Text>
      <Text style={{ textAlign: "center", marginBottom: 16 }}>
        Presiona la imagen que se encuentra abajo, te redireccionara a YouTube
        para que puedas disfrutar del trailer.
      </Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image
          source={{
            uri: selectedTitle?.imagePreview,
          }}
          style={styles.imagePreviewContainer}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
  },
  imagePreviewContainer: {
    width: 200,
    height: 280,
  },
});

export default ModalScreen;
