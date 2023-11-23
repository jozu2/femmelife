import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { RootStackNavigator } from "./navigators";
import { Provider } from 'react-redux';
import store from "./context/store";

const App = () => {
  const [fontsLoaded] = useFonts({
    light: require("./assets/fonts/OpenSans-Light.ttf"),
    regular: require("./assets/fonts/OpenSans-Regular.ttf"),
    medium: require("./assets/fonts/OpenSans-Medium.ttf"),
    semibold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    bold: require("./assets/fonts/OpenSans_SemiCondensed-Bold.ttf"),
    extrabold: require("./assets/fonts/OpenSans_SemiCondensed-ExtraBold.ttf"),
    serifLight: require("./assets/fonts/Merriweather-Light.ttf"),
    serifRegular: require("./assets/fonts/Merriweather-Regular.ttf"),
    serifBold: require("./assets/fonts/Merriweather-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <SafeAreaProvider>
        <Provider store={store}>
          <RootStackNavigator />
          <StatusBar style='auto' />
        </Provider>
      </SafeAreaProvider>
    </React.Fragment>
  );
};

export default App;
