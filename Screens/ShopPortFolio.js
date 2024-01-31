import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BookModel from "../Components/BookModel";

//MaterialIcons

const img1 = require("../assets/logo1.jpeg");
const cover = require("../assets/cover.jpeg");

const saloon1 = require("../assets/saloon1.jpeg");
const saloon2 = require("../assets/saloon2.jpeg");
const saloon3 = require("../assets/saloon3.jpeg");
const saloon4 = require("../assets/saloon4.jpeg");

const ShopPortFolio = ({ navigation }) => {
  const shop = {
    name: "Classic Cuts",
    location: "123 Main Street, Cityville",
    averageCharge: 30.0,
    type: "saloon",
    image: img1,
    coverImage: cover,
    portfolio: [
      { image: saloon1, styleName: "Haircut 1", price: 25.0 },
      { image: saloon2, styleName: "Haircut 2", price: 30.0 },
      { image: saloon3, styleName: "Haircut 3", price: 28.0 },
      { image: saloon4, styleName: "Haircut 4", price: 32.0 },
    ],
  };

  const renderPortfolioItem = ({ item }) => (
    <TouchableOpacity className="h-[250px] mx-1">
      <Image source={item.image} className="w-44 h-44 rounded-lg" />
      <View className="mt-2 flex-row justify-between px-2 items-center">
        <View>
          <Text className="text-sm font-semibold">{item.styleName}</Text>
          <Text className="text-xs text-gray-700">Ghc {item.price}</Text>
        </View>

        <TouchableOpacity>
          <FontAwesome
            name="heart-o"
            size={20}
            color={"#5d1425"}
            className=""
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Image source={shop.coverImage} className="h-[30vh]" />
        </View>
        <View className="flex-row justify-start">
          <View className="mx-6 w-24 h-24 flex-row justify-center items-center   rounded-full mt-[-40px]  ">
            <Image
              source={shop.image}
              className="w-24 h-24 rounded-full border-4 border-gray-100 shadow-md"
            />
          </View>

          <View>
            <Text className="text-xl mt-2 text-primary font-semibold ">
              {shop.name}
            </Text>
          </View>
        </View>
      </View>

      <View className="px-2 py-2">
        <View className="pt-0">
          <View className="gap-2">
            <View className="flex-row justify-start items-center gap-2 mt-[-20px]">
              <FontAwesome
                name="circle"
                size={10}
                color={"#5d1425"}
                className=""
              />
              <Text className="text-sm text-red-500 font-semibold italic">
                {shop.type}
              </Text>
            </View>

            <View className="flex-row justify-start gap-1 mt-1">
              <MaterialIcons
                name="location-on"
                size={20}
                color={"#5d1425"}
                className=""
              />
              <Text className="text-xs text-gray-800 font-semibold italic">
                {shop.location}
              </Text>
            </View>

            <View className="py-2">
              <Text className="text-xs px-1 text-gray-500">
                Ex incididunt laborum sit aliqua. Ut amet consectetur sit qui
                esse enim sunt magna quis culpa consectetur nostrud. Aute
                ullamco mollit laboris anim dolor adipisicing ex laboris magna
                aliquip consectetur.
              </Text>
            </View>
          </View>
          <View className="w-full">
            <BookModel text="Book Now" />
          </View>
        </View>
      </View>
      <View className="px-1 mt-4 mb-24">
        <View className="py-2 px-2">
          <Text className="text-primary font-normal text-base">Show Case</Text>
        </View>
        <FlatList
          data={shop.portfolio}
          numColumns={2}
          renderItem={renderPortfolioItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ShopPortFolio;
