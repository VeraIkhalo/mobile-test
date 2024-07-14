import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import GetNumber from "../components/GetNumber";

const Welcome = () => {
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
        <GetNumber />
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
        <View className="flex-col items-center pt-1 pb-14">
          <Text className=" font-medium text-sm text-green-600">
            Add to contacts
          </Text>
        </View>
        <View className="px-5 pt-9 pb-10 font-iregular">
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
                source={require("../assets/phone-grey.png")}
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

export default Welcome;
