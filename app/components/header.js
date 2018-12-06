import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View style={style.header}>
    <View>
      <Text style={style.text}> Greens are finished! Blues aren't finshed 😟</Text>
      <Text style={style.text}> Tap on an item to see your options</Text>
      </View>
    </View>
  );
};

const style = {
  header: {
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  text: {
    color: "#F5FCFF"
  }
};

export default Header