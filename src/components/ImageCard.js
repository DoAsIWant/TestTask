import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export const ImageCard = (props) => {
  const { description, name, image, onNavigatePhotos } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.author}>{name}</Text>
      <Pressable onPress={() => onNavigatePhotos(image)}>
        <Image style={styles.image} source={{ uri: image }}></Image>
      </Pressable>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 60,
    width: "80%",
    border: "1px solid red",
  },

  author: {
    fontSize: 22,
    paddingBottom: 10,
    color: "#0a3d62",
  },

  description: {
    fontSize: 15,
    paddingBottom: 15,
    paddingTop: 20,
    color: "#6c5ce7",
  },

  image: {
    width: "100%",
    paddingTop: 20,
    height: 200,
    paddingBottom: 20,
  },
});
