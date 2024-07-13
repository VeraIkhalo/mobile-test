import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Digits = ({ img }) => {
  return (
    <>
      <View className="px-5 pt-9 pb-8 font-iregular">
        <View className="flex-row justify-between items-center mb-3">
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">1</Text>
            <Image source={require("../assets/digit.png")} className="mb-1" />
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">2</Text>
            <Text className="text-[10px]">ABC</Text>
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">3</Text>
            <Text className="text-[10px]">DEF</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center mb-3">
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">4</Text>
            <Text className="text-[10px]">GHI</Text>
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">5</Text>
            <Text className="text-[10px]">JKL</Text>
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">6</Text>
            <Text className="text-[10px]">MNO</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center mb-3">
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">7</Text>
            <Text className="text-[10px]">PQR</Text>
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">8</Text>
            <Text className="text-[10px]">STU</Text>
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">9</Text>
            <Text className="text-[10px]">VWX</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center mb-3">
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">*</Text>
            <Text className="text-[10px]"></Text>
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">0</Text>
            <Text className="text-[10px]">+</Text>
          </View>
          <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
            <Text className="text-3xl mb-1">#</Text>
            <Text className="text-[10px]"></Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center mb-3">
          <View className="text-black-100 rounded-full w-[72px] items-center justify-center h-[72px]">
            <Image source={require("../assets/history.png")} className="mb-1" />
            <Text className="text-[10px]">History</Text>
          </View>
          <View className="text-black-100 rounded-full bg-green-100 w-[72px] items-center justify-center h-[72px]">
            <Image source={img} className="mb-1" />
          </View>
          <View className="text-black-100 rounded-full w-[72px] items-center justify-center h-[72px]">
            <Image source={require("../assets/contact.png")} className="mb-1" />
            <Text className="text-[10px]">Contacts</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Digits;

const styles = StyleSheet.create({});
