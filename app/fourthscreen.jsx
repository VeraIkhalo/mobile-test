import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Digits from "../components/Digits";
import EnterDigit from "../components/EnterDigit";

const fourthscreen = () => {
  const [firstNumber, setFirstNumber] = useState("");

  const handleNumberPress = (buttonValue) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const firstNumberDisplay = () => {
    if (firstNumber && firstNumber.length < 6) {
      return <Text>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text>{""}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return <Text>{firstNumber}</Text>;
    }
    if (firstNumber.length > 7) {
      return <Text>{firstNumber}</Text>;
    }
  };

  return (
    <SafeAreaView>
      <View
        className="px-5 pt-0 pb-5 bg-white font-iregular"
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
            <View>
              <Text className="text-sm font-medium text-black-100">
                WhatsApp
              </Text>
              <Text className="text-xs text-black-400">+1-2059276258</Text>
            </View>
            <Image source={require("../assets/expandmore.png")} />
          </View>
          <View className="w-1/4 justify-end flex-row">
            <View className="border border-grey-200 w-[28px] h-[28px] rounded-md justify-center flex items-center">
              <Text>+</Text>
            </View>
          </View>
        </View>
        <View className="flex-row justify-between items-center pb-4">
          <View className="w-1/4">
            <View className="flex-row w-[60px] h-[32px] border items-center justify-around border-grey-200 rounded-md">
              <Image source={require("../assets/flag.png")} />
              <Image source={require("../assets/expandmore.png")} />
            </View>
          </View>
          <View className="flex-col items-center w-2/4 font-isemibold">
            <View className="flex-row items-center text-black-100">
              <Text className="text-2xl">+1</Text>
              <Text className="text-2xl font-isemibold">
                {firstNumber && "-"}
              </Text>
              <Text className="text-2xl">{firstNumberDisplay()}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
            className="w-1/4 flex-row justify-end"
          >
            <Image source={require("../assets/cancel.png")} />
          </TouchableOpacity>
        </View>
        <View className="flex-col items-center pt-1 pb-8">
          <View className="flex flex-row justify-center m-auto">
            <Text className="text-sm mb-2 text-black-300 flex-wrap">
              Lorem ipsum dolor sit amet consectetur. Lacinia netus risus amet
              lacus praesent tincidunt nibh netus nec.
            </Text>
          </View>
          <Text className="text-grey-300 text-sm">$0.01/min</Text>
        </View>
        <View className="px-5 pt-9 pb-7 font-iregular">
          <View className="flex-row justify-between items-center mb-3">
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] flex-col items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("1")}
              >
                <Text className="text-3xl mb-1">1</Text>
                <Image
                  source={require("../assets/digit.png")}
                  className="mb-1"
                />
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("2")}
              >
                <Text className="text-3xl mb-1">2</Text>
                <Text className="text-[10px]">ABC</Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("3")}
              >
                <Text className="text-3xl mb-1">3</Text>
                <Text className="text-[10px]">DEF</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("4")}
              >
                <Text className="text-3xl mb-1">4</Text>
                <Text className="text-[10px]">GHI</Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("5")}
              >
                <Text className="text-3xl mb-1">5</Text>
                <Text className="text-[10px]">JKL</Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("6")}
              >
                <Text className="text-3xl mb-1">6</Text>
                <Text className="text-[10px]">MNO</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("7")}
              >
                <Text className="text-3xl mb-1">7</Text>
                <Text className="text-[10px]">PQR</Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("8")}
              >
                <Text className="text-3xl mb-1">8</Text>
                <Text className="text-[10px]">STU</Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("9")}
              >
                <Text className="text-3xl mb-1">9</Text>
                <Text className="text-[10px]">VWX</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity>
                <Text className="text-3xl mb-1">*</Text>
                <Text className="text-[10px]"></Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] flex-col items-center justify-center h-[72px]">
              <TouchableOpacity
                className="flex-col items-center justify-center"
                onPress={() => handleNumberPress("0")}
              >
                <Text className="text-3xl mb-1">0</Text>
                <Text className="text-[10px]">+</Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
              <Text className="text-3xl mb-1">#</Text>
              <Text className="text-[10px]"></Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <View className="text-black-100 rounded-full w-[72px] items-center justify-center h-[72px]">
              <Image
                source={require("../assets/history.png")}
                className="mb-1"
              />
              <Text className="text-[10px]">History</Text>
            </View>
            <View className="text-black-100 rounded-full bg-green-100 w-[72px] items-center justify-center h-[72px]">
              <Image
                source={require("../assets/phone-black.png")}
                className="mb-1"
              />
            </View>
            <View className="text-black-100 rounded-full w-[72px] items-center justify-center h-[72px]">
              <Image
                source={require("../assets/contact.png")}
                className="mb-1"
              />
              <Text className="text-[10px]">Contacts</Text>
            </View>
          </View>
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default fourthscreen;
