import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import Swiper from "react-native-swiper";

const img1 = require("../assets/saloon.jpeg");
const img2 = require("../assets/mackup.jpeg");
const img3 = require("../assets/babering.jpeg");

const ShopCarousel = () => {
  const images = [img1, img2, img3];

  return (
    <View className="h-[25vh] mt-2 rounded-xl  ">
      <Swiper showsButtons={false} autoplay={true} autoplayTimeout={5}>
        {images.map((imageUrl, index) => (
          <View key={index} style={styles.slide}>
            <View>
              <Image
                source={imageUrl}
                className="h-[30vh] rounded-2xl"
                style={styles.image}
              />
            </View>
            <View className="absolute left-3 bottom-5">
              <TouchableOpacity className="bg-white py-2 px-4 rounded-xl shadow-md">
                <Text className="font-medium text-red-600">Show Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    flex: 1,
    resizeMode: "cover",
    borderRadius: 50,
  },
});

export default ShopCarousel;
