import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={[style.header]}>
      <Text style={style.text}>My header</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    paddingTop: 38,
    height: 80,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
