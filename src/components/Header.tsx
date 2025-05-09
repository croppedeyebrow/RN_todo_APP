import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#007aff"} barStyle={"light-content"} />
      <Text style={styles.title}>내 일정</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007aff",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffff",
  },

  icon: {},
});

export default Header;
