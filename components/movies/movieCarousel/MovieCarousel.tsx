import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView } from "react-native";
import IMovie from "../../../utils/interfaces/IMovie";
import {
  RootStackParamList,
  RootTabParamList,
} from "../../../utils/types/types";
import MoviePreview from "../moviePreview";

type MovieCarouselProps = {
  movies: IMovie[];
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, "Movies", undefined>,
    NativeStackNavigationProp<RootStackParamList, "Root", undefined>
  >;
  category: number;
};

const MovieCarousel = ({ movies, navigation, category }: MovieCarouselProps) => {
  return (
    <ScrollView
      horizontal
      style={{
        flexDirection: "row",
        marginTop: 16,
        marginBottom: 16,
      }}
    >
      {movies.map((movie, index, movieArray) => (
        <MoviePreview
          key={movie.id}
          movie={movie}
          style={{
            marginRight: index + 1 < movieArray.length ? 8 : 0,
          }}
          category={category}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

export default MovieCarousel;
