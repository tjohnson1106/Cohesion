import React from "react";
import {
  AppRegistry,
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet
} from "react-native";
import { QueryRenderer, graphql } from "react-relay";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import Page from "./pages";
import Screen from "./screens";
import environment from "./environment";

const query = graphql`
  query appQuery {
    ...List
  }
`;

const Root = () => (
  <ErrorBoundary>
    <Router>
      <QueryRenderer
        environment={environment}
        query={query}
        render={({ error, props }) => {
          //console.log(props);
          if (error) {
            return (
              <View>
                <Text>{error.message}</Text>
              </View>
            );
          } else if (props && Platform.OS === "web") {
            return (
              <ErrorBoundary>
                <Screen data={props} />
              </ErrorBoundary>
            );
          } else if (props) {
            return (
              <ErrorBoundary>
                <Screen data={props} />
              </ErrorBoundary>
            );
          } else {
            return (
              <View>
                <Text>Loading...</Text>
              </View>
            );
          }
        }}
      />
    </Router>
  </ErrorBoundary>
);

AppRegistry.registerComponent("Root", () => Root);

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  central: { alignItems: "center", justifyContent: "center" },
  absolute: { position: "absolute", width, height },

  topRound: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 0.85
  },

  bottomRound: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0.85
  },

  header: {
    backgroundColor: "#e00082",
    alignItems: "center",
    paddingVertical: 12.5
  },

  text: { color: "white", fontSize: 12, textTransform: "uppercase" }
});

AppRegistry.runApplication("Root", {
  rootTag: document.getElementById("replace-with-js")
});
