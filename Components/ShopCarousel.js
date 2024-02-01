import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

const img1 = require("../assets/logo1.jpeg");
const img2 = require("../assets/logo2.jpeg");
const img3 = require("../assets/logo3.jpeg");
const img4 = require("../assets/logo4.jpeg");
const img5 = require("../assets/logo5.jpeg");

const ShopCarousel = ({ handleNavigation }) => {
  const shops = [
    {
      name: "Classic Cuts",
      location: "123 Main Street, Cityville",
      averageCharge: 30.0,
      type: "Saloon",
      image: img1,
    },
    {
      name: "Glamour Spa",
      location: "456 Oak Avenue, Townsville",
      averageCharge: 50.0,
      type: "Makeup",
      image: img2,
    },
    {
      name: "Ink Haven",
      location: "789 Elm Lane, Villageton",
      averageCharge: 100.0,
      type: "Tattooing",
      image: img3,
    },
    {
      name: "Shear Delight",
      location: "987 Pine Road, Hamletville",
      averageCharge: 25.0,
      type: "Haircut",
      image: img4,
    },
    {
      name: "Pierce Paradise",
      location: "654 Birch Boulevard, Countryside",
      averageCharge: 40.0,
      type: "Piercing",
      image: img5,
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.shopItem}
      className="px-4"
      onPress={() => {
        handleNavigation(); // Invoke the handleNavigation function
      }}>
      <View>
        <Text className="text-base font-medium text-primary">{item.name}</Text>
        <Text className="text-xs">{item.location}</Text>
        <Text style={styles.shopType}>
          Type: <Text className="text-xs text-orange-500">{item.type}</Text>
        </Text>
      </View>
      <View>
        <Image source={item.image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={shops}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  shopItem: {
    marginBottom: 8,

    padding: 6,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  shopName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  shopLocation: {
    color: "#555",
  },
  shopAverageCharge: {
    marginTop: 8,
  },
  shopType: {
    marginTop: 4,
    color: "#666",
  },
  shopTypeText: {
    color: "#FF0000", // Adjust the color as needed
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default ShopCarousel;
