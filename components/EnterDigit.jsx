import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";

const EnterDigit = () => {
  return (
    <>
      <View className="flex-row justify-between items-center">
        <View className="w-1/4">
          <View className="flex-row w-[60px] h-[32px] border items-center justify-around border-grey-200 rounded-md">
            <Image source={require("../assets/flag.png")} />
            <Image source={require("../assets/expandmore.png")} />
          </View>
        </View>
        <View className="flex-col items-center w-2/4 font-isemibold">
          <View className="flex-row items-center text-black-100">
            <Text className="text-2xl mb-2">+1</Text>
            <TextInput
              keyboardType="numeric"
              className="text-2xl pb-4 w-auto"
            />
          </View>
        </View>
        <View className="w-1/4 flex-row justify-end">
          <Image source={require("../assets/cancel.png")} />
        </View>
      </View>
    </>
  );
};

export default EnterDigit;

const styles = StyleSheet.create({});
