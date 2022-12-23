import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Cat Fact");
  const Section = [
    {
      title: "Cat Fact",
    },
    {
      title: "Bored?",
    },
  ];

  return (
    <View style={styles.container}>
      {Section.map((item, i) => (
        <Button
          key={i}
          onPress={() => setActiveTab(item.title)}
          style={
            activeTab == item.title
              ? { backgroundColor: "#000" }
              : { backgroundColor: "#cfcfcf" }
          }
          labelStyle={
            activeTab == item.title
              ? { color: "#FFF", fontSize: 16 }
              : { color: "#000" }
          }
        >
          {item.title}
        </Button>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    alignSelf: "center",
    marginBottom: 10,
  },
});
