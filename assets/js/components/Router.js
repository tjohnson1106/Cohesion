import React from "react";
import { AppRegistry, View, Text, Platform } from "react-native";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import { pageStyles } from "../pages";
import { screenStyles } from "../screens";

const Router = ({ data }) => {
  const format = Platform.OS === "web" ? pageStyles : screenStyles;
  return (
    <ErrorBoundary>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <View>
              <Text>Router Component</Text>
            </View>
          )}
        />
      </Switch>
    </ErrorBoundary>
  );
};

AppRegistry.registerComponent("Router", () => Router);

export default Router;
