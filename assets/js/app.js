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

const App = () => (
  <ErrorBoundary>
    <Router>
      <QueryRenderer
        environment={environment}
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
