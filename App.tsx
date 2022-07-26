import { NativeBaseProvider, StatusBar } from "native-base";
import React from "react";
import { THEME } from "./src/styles/theme";
import { SignIn } from "./src/screens/SignIn";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { Details } from "./src/screens/Details";


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />

     {fontsLoaded ? <Details /> : <Loading/>}
    </NativeBaseProvider>
  );
}
