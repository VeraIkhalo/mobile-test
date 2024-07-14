import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IncomingCallsTwo = () => {
  return (
    <SafeAreaView>
      <View
        className="pt-2 pb-5 px-5 bg-white font-iregular h-[100vh]"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="text-xs flex-row justify-between items-center pt-4">
          <Text className="text-black-100 font-isemibold text-xs">
            Incoming call to
          </Text>
          <Text className="text-black-400">+1-2059276258</Text>
        </View>
        <View className="flex-col items-center justify-between pt-8 h-[208px] mb-[450px]">
          <Image source={require("../assets/profile-pics.png")} />
          <Text className="text-black-100 font-iregular">Call from</Text>
          <Text className="text-black-100 font-isemibold text-2xl">
            +1-2059276258
          </Text>
          <Text className="text-black-500 text-sm">Houston, TX</Text>
        </View>
        <View className="flex-row justify-around items-center mb-3">
          <View className="flex-col items-center justify-center">
            <TouchableOpacity className="rounded-full bg-red-100 w-[72px] items-center justify-center h-[72px]">
              <Image source={require("../assets/phone-two.png")} />
            </TouchableOpacity>
          </View>
          <View className="flex-col items-center justify-center">
            <TouchableOpacity className="rounded-full bg-green-400 w-[72px] items-center justify-center h-[72px]">
              <Image source={require("../assets/phone-three.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IncomingCallsTwo;
