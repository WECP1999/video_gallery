import { StyleSheet } from "react-native";

const moviePreviewStyle = StyleSheet.create({
  imagePreviewContainer: {
    width: 160,
    height: 220,
  },
  image: {
    width: "100%",
  },
  overlay: { height: "100%", width: "100%", justifyContent: "flex-end" },
  overlayText: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 8,
  },
});

export default moviePreviewStyle;
