import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import QueueAlert from "../Components/QueueAlert";
import CirclePoints from "../Components/CirclePoint";

const QueueScreen = () => {
  return (
    <ScrollView className="bg-gray-100 mb-12 ">
      <View className="flex-row justify-between py-6 px-2">
        <TouchableOpacity className="text-left flex-row justify-start items-center gap-2">
          <MaterialIcons name="place" size={20} color="#5d1425" />
          <Text className="text-xs font-medium">Accra, Greater Accra</Text>
          <FontAwesome name="angle-down" size={20} color="#5d1425" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="bell" size={20} color="#5d1425" />
        </TouchableOpacity>
      </View>
      {
        // <View className="mx-2 h-48 rounded-xl shadow-lg bg-primary mt-4">
        //   <QueueAlert />
        // </View>
      }
      {
        //       <View className="flex-row justify-center items-center h-3/4">
        // <CirclePoints />
        //       </View>
      }
      <View className="w-5/6 h-[350px] pt-2 my-2 bg-white mx-auto rounded-2xl shadow-md">
        <View className="pt-4">
          <Text className="text-center text-lg font-medium text-primary">
            Smile Saloon
          </Text>
          <Text className="text-xs font-medium text-center text-gray-600">
            Let's put a smile on that face
          </Text>
        </View>
        <View className="flex-row justify-center mt-4">
          <Text className="text-8xl font-medium text-primary">12</Text>
          <Text className="text-lg ml-2 text-gray-600">th</Text>
        </View>
        <View>
          <Text className="text-base font-medium text-primary text-center mt-4 uppercase">
            Position In the Queue
          </Text>
        </View>
        <View>
          <Text className="text-center mt-2">Estimated Time</Text>
          <View className="flex-row justify-center gap-1 mt-2 items-center">
            <MaterialCommunityIcons name="clock" size={20} color="#5d1425" />
            <Text className="text-xs font-semibold">05 : 30 PM</Text>
          </View>
        </View>
        <View className="absolute bottom-2 mx-4">
          <View className="flex-row justify-center gap-2">
            <MaterialIcons name="place" size={20} color="gray" />
            <Text className="text-gray-500">
              Weija, New Aplaku - Greater Accra
            </Text>
          </View>
        </View>
      </View>
      <View className=" ">
        <TouchableOpacity className="mx-8 border-primary border-2 flex-row justify-center items-center py-2 mt-4 px-6  rounded-md">
          <Text className="font-semibold text-primary">
            <AntDesign name="logout" size={20} color="#5d1425" />
            <Text className="mr-2"> Leave Queue</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="mx-8 bg-primary  flex-row justify-center items-center py-2 mt-4 px-6  rounded-md">
          <Entypo name="back-in-time" size={20} color="white" />
          <Text className="font-semibold text-white ml-2">Re-schedule</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default QueueScreen;
