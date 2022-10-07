import * as React from "react";
import {
  ImageBackground,
  StyleProp,
  ViewStyle,
  Pressable,
  Alert,
} from "react-native";
import IMovie from "../../../utils/interfaces/IMovie";
import { Text } from "../../Themed";
import { LinearGradient } from "expo-linear-gradient";
import moviePreviewStyle from "./MoviePreview.style";
import { CompositeNavigationProp } from "@react-navigation/native";
import {
  RootStackParamList,
  RootTabParamList,
} from "../../../utils/types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import ISelectedItem from "../../../utils/interfaces/ISelectedItem";

type MoviePreviewProps = {
  movie: IMovie;
  style?: StyleProp<ViewStyle> | undefined;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, "Movies", undefined>,
    NativeStackNavigationProp<RootStackParamList, "Root", undefined>
  >;
  category: number;
};

const MoviePreview = ({
  movie,
  style,
  navigation,
  category,
}: MoviePreviewProps) => {
  const { setItem } = useAsyncStorage("@selectedItem");

  const onPress = React.useCallback(async () => {
    try {
      const data: ISelectedItem = {
        type: "movie",
        id: movie.id,
        category,
      };
      await setItem(JSON.stringify(data));
      navigation.navigate("MovieDetail");
    } catch (error) {
      Alert.prompt("error");
    }
  }, []);

  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        style={[moviePreviewStyle.imagePreviewContainer, style]}
        source={{
          uri: movie.imagePreview,
        }}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={moviePreviewStyle.overlay}
        >
          <Text
            style={moviePreviewStyle.overlayText}
            lightColor='#fff'
            darkColor='#000'
          >
            {movie.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

export default MoviePreview;
