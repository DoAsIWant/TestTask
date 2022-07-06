import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

export const Error = () => {
  return (
    <View style={styles.errorContainer}>
      <Image
        style={styles.errorImage}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAXCw6k1joCtqZbK-KKsFGl3Jtn-fvqQMGg&usqp=CAU",
        }}
      />
      <Text style={styles.errorCaption}>Something went wrong</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    padding: 40,
  },

  errorImage: {
    width: 300,
    height: 300,
    borderRadius: 200
  },

  errorCaption: {
    fontSize: 22,
    color: "#6c5ce7",
    paddingTop: 25,
    textAlign: "center"
  }
});
