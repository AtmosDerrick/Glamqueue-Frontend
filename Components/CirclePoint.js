import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

const CirclePoints = () => {
  const [activePoint, setActivePoint] = useState(10); // Start from position 1
  const [countdown, setCountdown] = useState(10); // Initial countdown
  const [angleAnim] = useState(new Animated.Value(0));

  const pointsCount = 20; // Increased the number of points
  const angle = (2 * Math.PI) / pointsCount;

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next point after 10 seconds
      setActivePoint((prevPoint) => (prevPoint % pointsCount) - 1);
      setCountdown(5); // Reset the countdown

      // Stop the interval when reaching the lowest point (1)
      if (activePoint === 1) {
        clearInterval(interval);
      }
    }, 10 * 1000);

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(prevCountdown - 1, 0));
    }, 1000);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(interval);
      clearInterval(countdownInterval);
    };
  }, [activePoint]);

  useEffect(() => {
    // Animate the movement to the lowest point
    Animated.timing(angleAnim, {
      toValue: ((pointsCount - activePoint) % pointsCount) * angle, // Updated calculation
      duration: 10000, // Animation duration in milliseconds (10 seconds)
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [activePoint]);

  const getPointPosition = (index) => {
    const radius = 150; // Increased the radius
    const x = Math.cos(angle * index) * radius;
    const y = Math.sin(angle * index) * radius;
    return { transform: [{ translateX: x }, { translateY: y }] };
  };

  const getPointSize = (index) => {
    const baseSize = 20; // Increased the base size
    const size = index === activePoint ? 2 * baseSize : baseSize;
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
    };
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: pointsCount }).map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.point,
            getPointPosition(index),
            getPointSize(index),
            index === activePoint && styles.activePoint,
          ]}>
          <Text style={styles.pointNumber}>
            {(index + 1) % pointsCount || pointsCount}
          </Text>
        </Animated.View>
      ))}
      <View style={styles.centerTextContainer}>
        <Text
          style={
            styles.centerText
          }>{`Kindly Wait for \n${countdown} seconds`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  point: {
    backgroundColor: "#5d1425",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  pointNumber: {
    color: "white",
  },
  activePoint: {
    backgroundColor: "red",
  },
  centerTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    textAlign: "center",
  },
});

export default CirclePoints;
