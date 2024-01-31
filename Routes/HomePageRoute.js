import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/SignUpScreen";
import Home from "../Screens/Home";
import ShopPortFolio from "../Screens/ShopPortFolio";

const Stack = createStackNavigator();

const HomePageRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="homepage" component={Home} />
      <Stack.Screen name="portfolio" component={ShopPortFolio} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomePageRoute;
