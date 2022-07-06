import React from "react";
import { Image, StyleSheet } from "react-native";

export const PhotoScreen = ({ route }) => {
  return <Image style={styles.image} source={{ uri: route.params }}></Image>;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
