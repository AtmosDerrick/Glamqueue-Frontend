import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeRoute from "./Routes/HomeRoute";
import LoginRoute from "./Routes/LoginRoute";

export default function App() {
  return (
    <NavigationContainer>
      <HomeRoute />
    </NavigationContainer>
  );
}
