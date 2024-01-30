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
            className="w-3/4  py-2 h-12 ml-4"
          />
        </View>
      </View>
      <View>
        <CarouselImage />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default Home;
