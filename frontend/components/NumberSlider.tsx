import React from "react";
import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";

const ITEM_HEIGHT = 50; // Adjust this based on your design
const SCREEN_HEIGHT = Dimensions.get("window").height;

type NumberSliderProps = {
  data: { id: number; title: string }[];
  value: number;
};

const NumberSlider = ({ data, value }: NumberSliderProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        pagingEnabled
        initialScrollIndex={value + 1}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
      {/* Center Indicator Line */}
      <View style={styles.centerIndicator} />
    </View>
  );
};

export default NumberSlider;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: ITEM_HEIGHT * 3,
  },
  listContainer: {
    // paddingVertical: SCREEN_HEIGHT / 2 - ITEM_HEIGHT, // Centering logic
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  centerIndicator: {
    position: "absolute",
    top: "35%",
    width: "100%",
    paddingHorizontal: 20,

    height: "30%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    opacity: 0.5,
  },
});
