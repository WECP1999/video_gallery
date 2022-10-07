import * as React from "react";
import { StyleSheet, Platform } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { View } from "../Themed";

type VideoProps = {
  uri: string;
};

const Video = ({ uri }: VideoProps) => {
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={214}
        webViewProps={{
          renderToHardwareTextureAndroid: true,
          androidLayerType:
            Platform.OS === "android" && Platform.Version <= 22
              ? "hardware"
              : "none",
        }}
        webViewStyle={[styles.video, { opacity: 0.99 }]}
        videoId={uri}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Video;
