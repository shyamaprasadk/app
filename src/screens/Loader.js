import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export const CatLoader = () => {
  return (
    <View>
      <AnimatedLottieView
        source={require("../../assets/cat-loading.json")}
        style={styles.loaderCat}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderCat: {
    width: 250,
    height: 250,
  },
});
