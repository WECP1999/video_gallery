import React from "react";
import { ScrollView } from "react-native";
import IMovie from "../../../utils/interfaces/IMovie";
import MoviePreview from "../moviePreview";

type MovieCarouselProps = {
  movies: IMovie[];
};

const MovieCarousel = ({ movies }: MovieCarouselProps) => {
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
        />
      ))}
    </ScrollView>
  );
};

export default MovieCarousel;
