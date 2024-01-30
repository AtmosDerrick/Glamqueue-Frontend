import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const CarouselImage = () => {
  const images = [
    "https://i.pinimg.com/564x/18/32/fb/1832fbafc3d2ce76fd842c0958821e60.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <View className="h-[25vh] mt-4 p-2 ">
      <Swiper
        className="h-[25vh] bg-red-500 rounded-xl"
        showsButtons={true}
        autoplay={false}
        autoplayTimeout={3}>
        {images.map((imageUrl, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={{ uri: imageUrl }}
              className="h-[30vh] rounded-2xl"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    flex: 1,
    resizeMode: "cover",
  },
});

export default CarouselImage;
