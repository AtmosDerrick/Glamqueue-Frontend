import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  focused,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import CarouselImage from "../Components/CarouselImage.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import ShopCarousel from "../Components/ShopCarousel.js";

const Home = ({ navigation }) => {
  const [text, setText] = useState("");
  const [cart, setCart] = useState("");

  const activeCart = (cat) => {
    if (cart != cat) {
      setCart(cat);
    } else {
      setCart("");
    }
  };

  const handleNavigation = () => {
    navigation.navigate("portfolio");
  };
  return (
    <KeyboardAvoidingView className="px-4 mt-3 h-full ">
      <View className="flex-row justify-between py-6">
        <TouchableOpacity className="text-left flex-row justify-start items-center gap-2">
          <MaterialIcons name="place" size={20} color="#5d1425" />
          <Text className="text-xs font-medium">Accra, Greater Accra</Text>
          <FontAwesome name="angle-down" size={20} color="#5d1425" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="bell" size={20} color="#5d1425" />
        </TouchableOpacity>
      </View>

      <ScrollView
        stickyHeaderIndices={[2]}
        bounces={true}
        showsVerticalScrollIndicator={false}
        className="mb-12">
        <View>
          <View className="mt-3 border-[1px]  px-2 rounded-xl flex-row justify-start items-center">
            <FontAwesome name="search" size={20} color="#5d1425" />
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              className="w-3/4  py-1 h-10 ml-4"
            />
          </View>
        </View>
        <View>
          <CarouselImage />
        </View>
        <View className="py-2 bg-gray-100">
          <View className="flex-row justify-between items-center">
            <Text className="font-medium text-primary text-lg">Category</Text>
            <Text className=" text-primary text-sm">See all</Text>
          </View>
          <View className="pt-2 flex-row justify-between">
            <TouchableOpacity
              onPress={() => {
                activeCart("saloon");
              }}>
              <View
                className={
                  cart === "saloon"
                    ? "flex-row justify-center items-center w-12 h-12 rounded-xl bg-primary "
                    : "flex-row justify-center items-center w-12 h-12 rounded-xl  bg-gray-300"
                }>
                <MaterialCommunityIcons
                  name="hair-dryer"
                  size={20}
                  color={cart === "saloon" ? "white" : "#5d1425"}
                  className=""
                />
              </View>
              <Text className="text-xs text-center mt-1">Saloon</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                activeCart("haircut");
              }}>
              <View
                className={
                  cart === "haircut"
                    ? "flex-row justify-center items-center w-12 h-12 rounded-xl bg-primary "
                    : "flex-row justify-center items-center w-12 h-12 rounded-xl  bg-gray-300"
                }>
                <Feather
                  name="scissors"
                  size={20}
                  color={cart === "haircut" ? "white" : "#5d1425"}
                  className=""
                />
              </View>
              <Text className="text-xs text-center mt-1">HairCut</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                activeCart("makeup");
              }}>
              <View
                className={
                  cart === "makeup"
                    ? "flex-row justify-center items-center w-12 h-12 rounded-xl bg-primary "
                    : "flex-row justify-center items-center w-12 h-12 rounded-xl  bg-gray-300"
                }>
                <MaterialCommunityIcons
                  name="brush"
                  size={20}
                  color={cart === "makeup" ? "white" : "#5d1425"}
                  className=""
                />
              </View>
              <Text className="text-xs text-center mt-1">Make-ups</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                activeCart("piecing");
              }}>
              <View
                className={
                  cart === "piecing"
                    ? "flex-row justify-center items-center w-12 h-12 rounded-xl bg-primary "
                    : "flex-row justify-center items-center w-12 h-12 rounded-xl  bg-gray-300"
                }>
                <MaterialCommunityIcons
                  name="nail"
                  size={20}
                  color={cart === "piecing" ? "white" : "#5d1425"}
                  className=""
                />
              </View>
              <Text className="text-xs text-center mt-1">Piecing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                activeCart("tatoo");
              }}>
              <View
                className={
                  cart === "tatoo"
                    ? "flex-row justify-center items-center w-12 h-12 rounded-xl bg-primary "
                    : "flex-row justify-center items-center w-12 h-12 rounded-xl  bg-gray-300"
                }>
                <MaterialCommunityIcons
                  name="draw-pen"
                  size={20}
                  color={cart === "tatoo" ? "white" : "#5d1425"}
                  className=""
                />
              </View>
              <Text className="text-xs text-center mt-1">Tatoo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mb-14">
          <ShopCarousel handleNavigation={handleNavigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default Home;
