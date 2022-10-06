import * as React from "react";
import { ImageBackground, StyleProp, ViewStyle } from "react-native";
import IMovie from "../../../utils/interfaces/IMovie";
import { Text } from "../../Themed";
import { LinearGradient } from "expo-linear-gradient";
import moviePreviewStyle from "./MoviePreview.style";

type MoviePreviewProps = {
  movie: IMovie;
  style?: StyleProp<ViewStyle> | undefined;
};

const MoviePreview = ({ movie, style }: MoviePreviewProps) => {
  return (
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
  );
};

export default MoviePreview;
