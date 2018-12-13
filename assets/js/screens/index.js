import React from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";
import Router from "../components/Router";
// import Footer from "./Footer"

const Screen = ({ data }) => (
  <View>
    <Router data={data} />
    <Text style={{ fontWeight: "700" }}>Mobile Footer</Text>
  </View>
);

AppRegistry.registerComponent("Screen", () => Screen);

export const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 6,
    paddingBottom: 9,
    borderWidth: 1.7,
    backgroundColor: "white",
    borderColor: "black"
  }
});

export default Screen;
