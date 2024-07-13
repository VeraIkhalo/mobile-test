import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const GetNumber = () => {
  return (
    <>
      <View className="flex-row justify-end pt-6">
        <View className="bg-black-300 h-[32px] flex-row justify-around w-[145px] rounded-md items-center mb-9">
          <Image source={require("../assets/phone.png")} />
          <Text className="text-sm text-white font-isemibold">
            Get a Number
          </Text>
        </View>
      </View>
    </>
  );
};

export default GetNumber;

const styles = StyleSheet.create({});
