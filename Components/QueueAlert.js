import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const QueueAlert = () => {
  return (
    <View className="p-2">
      <Text className="text-base text-white font-medium">
        In Queue at <Text>Rosans</Text>
      </Text>
      <Text className="mt-4 text-sm text-gray-300">
        Estimated Time :{" "}
        <Text className="text-yellow-300 font-semibold">05 : 44 PM</Text>
      </Text>
      <Text className="mt-4 text-sm text-gray-300">
        Queue Number : <Text className="text-yellow-300 font-semibold">29</Text>
      </Text>
      <Pressable className="mt-8 bg-white w-32 h-10 rounded-md flex-row justify-center items-center">
        <Text className="font-medium text-primary">Leave Queue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default QueueAlert;
