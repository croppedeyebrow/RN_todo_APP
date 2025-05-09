import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";
const Home = () => {
  return (
    <View>
      <Header />
      <TodoCard />
    </View>
  );
};

export default Home;
