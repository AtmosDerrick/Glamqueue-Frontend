import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import AppointmentPrompt from "../Components/AppointmentPrompt";

const img1 = require("../assets/logo1.jpeg");
const img2 = require("../assets/logo2.jpeg");
const img3 = require("../assets/logo3.jpeg");

const Appointments = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const appointments = [
    {
      shopName: "Classic Cuts",
      time: "10:00 AM",
      date: "10th Feb. 2024",
      services: "Cornrow",
      image: img1,
    },
    {
      shopName: "Glamour Spa",
      time: "02:30 PM",
      date: "10th Feb. 2024",
      services: "Pedicure",
      image: img2,
    },
    {
      shopName: "Ink Haven",
      time: "12:15 PM",
      date: "10th Feb. 2024",
      services: "Hair cut",
      image: img3,
    },
    // Add more appointments as needed
  ];
  const renderAppointmentItem = ({ item }) => (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View className="mx-4 bg-white  mb-2 rounded-xl flex-row justify-start ">
        <View className="  y w-2/6 items-center justify-center">
          <Image source={item.image} className="h-20 w-20" />
        </View>
        {
          // <View className="  bg-primary w-2/5 items-center justify-center">
          // {
          //   // <MaterialIcons name="date-range" size={20} color="#5d1425" />
          // }
          // <Text className="text-base text-white py-1 text-center font-semibold  ">
          //   {item.date}
          // </Text>
          // <View className="flex-row justify-center">
          //   {<Entypo name="clock" size={20} color="white" />}
          //   <Text className="text-xs font-semibold text-white">{` ${item.time} `}</Text>
          // </View>
          // </View>
        }
        <View className=" ">
          <View className="flex-row justify-between items-center gap-6">
            <Text className="text-base font-semibold text-primary ">
              {item.date}
            </Text>
            <Text className="text-sm font-semibold text-primary ">
              {item.time}
            </Text>
          </View>
          <Text className="text-sm font-bold text-primary">
            Service: {item.services}
          </Text>
          <Text className="text-sm italic">@ {item.shopName}</Text>

          <View className="flex-row justify-start gap-2 pb-2 border-t-[1px] mt-2 border-gray-200 ml-2">
            <MaterialIcons name="place" size={12} color="gray" />
            <Text className="text-gray-700 text-xs">Weija, Greater Accra</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View className="w-full h-full flex-row items-center px-4 ">
          <View className="w-full h-[250px] shadow-lg  bg-white rounded-lg p-4 border-gray-200 border-2 ">
            <View className="flex-row justify-start gap-2">
              <View className=" flex-row justify-center w-3/7 pr-4 border-r-2 border-gray-200 ">
                <View>
                  <View className="flex-row justify-center">
                    <Image source={img1} className="h-16 w-16 rounded-full" />
                  </View>
                  <Text className="text-lg pt-2 font-semibold text-primary text-center">
                    Classic Cuts
                  </Text>
                  <Text className="text-xs pt-1">Corn Row Braiding</Text>
                </View>
              </View>
              <View className="w-1/2 justify-center">
                <View className="">
                  <Text className="text-primary text-lg text-center font-semibold">
                    10th Feb, 2024
                  </Text>
                  <Text className="text-primary text-center font-semibold">
                    10 : 00 pm
                  </Text>
                  <Text className="text-primary text-center font-semibold mt-2  ">
                    20 Days 45mins More
                  </Text>
                </View>
              </View>
            </View>
            <View className="absolute bottom-4">
              <View className="  w-full px-4 flex-row justify-between mt-4">
                <Pressable className="border-primary border-2 p-2 rounded-lg">
                  <Text className="text-primary font-semibold">
                    Cancel Appointment
                  </Text>
                </Pressable>
                <Pressable className="p-2 bg-primary rounded-lg">
                  <Text className="font-semibold text-white">Reschedule</Text>
                </Pressable>
              </View>
            </View>
            <TouchableOpacity
              className="absolute top-2 right-2 w-7 h-7 border-2 border-red-500 rounded-full flex-row justify-center items-center"
              onPress={() => {
                setModalVisible(false);
              }}>
              <MaterialIcons name="close" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text className="px-4 my-4 text-lg font-semibold text-primary ">
        Appointments
      </Text>
      <View>
        <Text className="px-4 py-2 text-sm italic">
          You have the following appointments
        </Text>
        <FlatList
          data={appointments}
          renderItem={renderAppointmentItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <AppointmentPrompt />
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  shopName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dateTime: {
    fontSize: 16,
    color: "#555",
  },
});

export default Appointments;
