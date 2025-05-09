import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TodoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.title}>TodoCard</Text>
      </View>
      <Text style={styles.time}>6:00 am</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(32,31,31,0.2)",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  time: {
    fontSize: 12,
    fontWeight: "400",
    color: "black",
  },
  inactiveTitles: {},
  todoContainer: {},
});

export default TodoCard;
