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
      type: "saloon",
      image: img1,
    },
    {
      name: "Glamour Spa",
      location: "456 Oak Avenue, Townsville",
      averageCharge: 50.0,
      type: "makeup",
      image: img2,
    },
    {
      name: "Ink Haven",
      location: "789 Elm Lane, Villageton",
      averageCharge: 100.0,
      type: "tattooing",
      image: img3,
    },
    {
      name: "Shear Delight",
      location: "987 Pine Road, Hamletville",
      averageCharge: 25.0,
      type: "haircut",
      image: img4,
    },
    {
      name: "Pierce Paradise",
      location: "654 Birch Boulevard, Countryside",
      averageCharge: 40.0,
      type: "piercing",
      image: img5,
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.shopItem}
      onPress={() => {
        handleNavigation(); // Invoke the handleNavigation function
      }}>
      <View>
        <Text style={styles.shopName}>{item.name}</Text>
        <Text style={styles.shopLocation}>{item.location}</Text>
        <Text style={styles.shopAverageCharge}>
          Average Charge: ${item.averageCharge}
        </Text>
        <Text style={styles.shopType}>
          Type: <Text style={styles.shopTypeText}>{item.type}</Text>
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
    borderWidth: 1,
    borderColor: "#5d1425",
    padding: 6,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
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
