import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OutgoingCallsTwo = () => {
  return (
    <SafeAreaView>
      <View
        className="pt-2 pb-5 px-5 bg-white font-iregular h-[100vh]"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="text-xs flex-row justify-between items-center pt-4">
          <Text className="text-black-100 font-isemibold">Calling from</Text>
          <Text className="text-black-400">+1-2059276258</Text>
        </View>
        <View className="flex-col items-center justify-between pt-8 h-[208px]">
          <Image source={require("../assets/profile-pics.png")} />
          <Text className="text-black-100 font-iregular">Calling..</Text>
          <Text className="text-black-100 font-isemibold text-2xl">
            +1-2059276258
          </Text>
          <Text className="text-black-500 text-sm">Houston, TX</Text>
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
                className="mb-1 hidden"
              />
              <Text className="text-[10px] hidden">History</Text>
            </View>
            <View className="flex-col items-center justify-center">
              <TouchableOpacity className="rounded-full bg-red-100 w-[72px] items-center justify-center h-[72px]">
                <Image source={require("../assets/phone-two.png")} />
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full w-[72px] items-center justify-center h-[72px]">
              <Image
                style={{ height: 32, width: 32 }}
                source={require("../assets/expandmore.png")}
                className="mb-1"
              />
              <Text className="text-[10px]">Hide</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OutgoingCallsTwo;
