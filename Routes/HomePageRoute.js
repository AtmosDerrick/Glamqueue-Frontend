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
        headerTitleStyle: {
          color: "white",
          backgroundColor: "#5d1425",
        },
      }}>
      <Stack.Screen
        name="homepage"
        component={Home}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ShopPortFolio}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#5d1425",
            borderColor: "#5d1425",
          },
          headerTitle: "",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomePageRoute;
