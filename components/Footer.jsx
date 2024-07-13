import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <>
      <View className="flex-row justify-between items-center pt-14 font-iregular">
        <View className="flex-col items-center">
          <Image source={require("../assets/home.png")} />
          <Text className="text-[10px] text-black-200 mt-2">Home</Text>
        </View>
        <View className="flex-col items-center">
          <Image source={require("../assets/message.png")} />
          <Text className="text-[10px] text-black-200 mt-2">Message</Text>
        </View>
        <View className="flex-col items-center">
          <Image source={require("../assets/keypad.png")} />
          <Text className="text-[10px] text-black-100 mt-2">Keypad</Text>
        </View>
        <View className="flex-col items-center">
          <Image source={require("../assets/call-sm.png")} />
          <Text className="text-[10px] text-black-200 mt-2">Call</Text>
        </View>
        <View className="flex-col items-center">
          <Image source={require("../assets/contact-sm.png")} />
          <Text className="text-[10px] text-black-200 mt-2">Contact</Text>
        </View>
      </View>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({});
