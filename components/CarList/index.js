import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../carItem";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={cars} renderItem={({ item }) => <CarItem car={item} />} />
    </View>
  );
};

export default CarList;
