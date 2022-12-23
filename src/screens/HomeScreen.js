import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import Cat from "../components/Home/Cat";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Cat />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
    backgroundColor:'#FFF'
  },
});
