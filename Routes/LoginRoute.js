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

const Stack = createStackNavigator();

const LoginRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default LoginRoute;
