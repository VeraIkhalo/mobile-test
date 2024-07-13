import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import Digits from "../components/Digits";
import GetNumber from "../components/GetNumber";
import EnterDigit from "../components/EnterDigit";

const Welcome = () => {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView>
      <ScrollView
        className="px-5 pt-0 bg-white font-iregular"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <GetNumber />
        <EnterDigit />
        <View className="flex-col items-center pt-1 pb-14">
          <Text className=" font-medium text-sm text-green-600">
            Add to contacts
          </Text>
        </View>
        <Digits img={require("../assets/phone-grey.png")} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
