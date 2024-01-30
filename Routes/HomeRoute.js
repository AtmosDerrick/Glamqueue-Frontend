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
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../Screens/Home";

const HomeRoute = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerTitle: "GlamQueue",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#5d1425",
        },
        headerTintColor: "#fff",
        textAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: "flex",
          position: "absolute",
          bottom: 20,
          left: 25,
          right: 25,
          elevation: 5,
          backgroundColor: "#5d1425",
          borderRadius: 30,
          height: 72,
        },
        tabBarShowLabel: false,
        headerShown: true,
      })}>
      <Tab.Screen
        name="Queue"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}>
              <View
                style={[
                  {
                    padding: 3,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: focused ? "white" : "transparent",
                  },
                  focused ? {} : { borderWidth: 0 }, // If not focused, remove the border
                ]}>
                <MaterialCommunityIcons
                  name="human-queue"
                  size={24}
                  color={focused ? "white" : "#cacaca"}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}>
              <View
                style={[
                  {
                    padding: 3,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: focused ? "white" : "transparent",
                  },
                  focused ? {} : { borderWidth: 0 }, // If not focused, remove the border
                ]}>
                <MaterialCommunityIcons
                  name="home"
                  size={24}
                  color={focused ? "white" : "#cacaca"}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}>
              <View
                style={[
                  {
                    padding: 3,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: focused ? "white" : "transparent",
                  },
                  focused ? {} : { borderWidth: 0 }, // If not focused, remove the border
                ]}>
                <MaterialIcons
                  name="date-range"
                  size={24}
                  color={focused ? "white" : "#cacaca"}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeRoute;
