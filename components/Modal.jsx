import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Modal = () => {
  return (
    <View className="bg-white rounded-2xl p-6 border border-grey-400 w-[80%] m-auto">
      <Text className="text-black-100 mb-3 font-isemibold">Invalid Number</Text>
      <Text className="text-black-400 text-sm mb-8 font-iregular">
        The number you have entered is invalid. Please check the number and try
        again.
      </Text>
      <TouchableOpacity className=" flex-row items-center justify-center border border-grey-200 rounded-lg px-2 py-3">
        <Text className="text-sm font-isemibold text-black-100">OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Modal;
