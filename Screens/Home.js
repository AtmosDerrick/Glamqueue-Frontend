import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  focused,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import CarouselImage from "../Components/CarouselImage.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

const Home = () => {
  const [text, setText] = useState("");
  return (
    <KeyboardAvoidingView className="px-4 mt-3 h-full ">
      <View className="flex-row justify-between">
        <TouchableOpacity className="text-left flex-row justify-start items-center gap-2">
          <MaterialIcons name="place" size={20} color="#5d1425" />
          <Text className="text-xs font-medium">Accra, Greater Accra</Text>
          <FontAwesome name="angle-down" size={20} color="#5d1425" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="bell" size={20} color="#5d1425" />
        </TouchableOpacity>
      </View>

      <View>
        <View className="mt-8 border-[1px]  px-2 rounded-xl flex-row justify-start items-center">
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
      <View className="pt-4">
        <View className="flex-row justify-between">
          <Text className="font-medium text-primary text-lg">Category</Text>
          <Text className=" text-primary text-sm">See all</Text>
        </View>
        <View className="pt-4 flex-row justify-between">
          <TouchableOpacity>
            <View className="flex-row justify-center items-center w-12 h-12 rounded-xl bg-gray-300">
              <MaterialCommunityIcons
                name="hair-dryer"
                size={24}
                color="#5d1425"
                className=""
              />
            </View>
            <Text className="text-xs text-center mt-1">Saloon</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row justify-center items-center w-12 h-12 rounded-xl bg-gray-300">
              <Feather name="scissors" size={24} color="#5d1425" className="" />
            </View>
            <Text className="text-xs text-center mt-1">HairCut</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row justify-center items-center w-12 h-12 rounded-xl bg-gray-300">
              <MaterialCommunityIcons
                name="brush"
                size={24}
                color="#5d1425"
                className=""
              />
            </View>
            <Text className="text-xs text-center mt-1">Make-ups</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row justify-center items-center w-12 h-12 rounded-xl bg-gray-300">
              <MaterialCommunityIcons
                name="nail"
                size={24}
                color="#5d1425"
                className=""
              />
            </View>
            <Text className="text-xs text-center mt-1">Piecing</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row justify-center items-center w-12 h-12 rounded-xl bg-gray-300">
              <MaterialCommunityIcons
                name="draw-pen"
                size={24}
                color="#5d1425"
                className=""
              />
            </View>
            <Text className="text-xs text-center mt-1">Tatoo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default Home;
