import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Digits from "../components/Digits";
import GetNumber from "../components/GetNumber";
import EnterDigit from "../components/EnterDigit";

const thirdscreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        className="px-5 pt-0 bg-white font-iregular"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex flex-row justify-between my-8">
          <View className="flex w-3/4 flex-row gap-3 items-center">
            <Image
              source={require("../assets/flag.png")}
              style={{ height: 24, width: 24 }}
            />
            <Text>+1-2059276258</Text>
            <Image source={require("../assets/expandmore.png")} />
          </View>
          <View className="w-1/4 justify-end flex-row">
            <View className="border border-grey-200 w-[28px] h-[28px] rounded-md justify-center flex items-center">
              <Text>+</Text>
            </View>
          </View>
        </View>
        <EnterDigit />
        <View className="flex-col items-center pt-1 pb-8">
          <Text className=" font-isemibold text-sm mb-2 text-green-600">
            Add to contacts
          </Text>
          <Text className="text-grey-300 text-sm">$0.01/min</Text>
        </View>
        <Digits img={require("../assets/phone-black.png")} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default thirdscreen;
