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
import EnterDigit from "../components/EnterDigit";

const sixthscreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        className="px-5 pt-0 bg-white font-iregular"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex flex-row justify-between my-6">
          <View className="flex w-3/4 flex-row gap-3 items-center">
            <Image
              source={require("../assets/flag.png")}
              style={{ height: 24, width: 24 }}
            />
            <View>
              <Text className="text-sm font-medium font-isemibold text-black-100">
                WhatsApp
              </Text>
              <Text className="text-xs text-black-400 font-iregular">
                +1-2059276258
              </Text>
            </View>
            <Image source={require("../assets/expandmore.png")} />
          </View>
          <View className="w-1/4 justify-end flex-row">
            <View className="border border-grey-200 w-[28px] h-[28px] rounded-md justify-center flex items-center">
              <Text>+</Text>
            </View>
          </View>
        </View>
        <View className="flex-row justify-between items-center font-isemibold bg-green-300 rounded-2xl py-3 px-4 text-sm font-medium text-black-100 mb-4">
          <View className="flex-row items-center gap-2">
            <Image source={require("../assets/diamond.png")} />
            <Text>Balance: 0 CR.</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Text>Top up</Text>
            <Image source={require("../assets/chevron-right.png")} />
          </View>
        </View>
        <EnterDigit />
        <View className="flex-col items-center pt-1 pb-2">
          <View className="flex flex-row justify-center m-auto">
            <Text className="text-sm mb-2 text-black-300 flex-wrap">
              Brent Woo
            </Text>
          </View>
          <Text className="text-grey-300 text-sm">$0.01/min</Text>
        </View>
        <Digits img={require("../assets/phone-grey.png")} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default sixthscreen;
