import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OutgoingCallsFour = () => {
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
          <Text className="text-black-100 font-iregular">Call end</Text>
          <Text className="text-black-100 font-isemibold text-2xl">
            +1-2059276258
          </Text>
          <Text className="text-black-500 text-sm">Houston, TX</Text>
        </View>
        <View className="px-5 pt-9 pb-10 font-iregular">
          <View className="flex-row justify-between items-center mb-3 ">
            <View className="flex-col items-center justify-center">
              <TouchableOpacity className="rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
                <Image
                  className="opacity-20"
                  source={require("../assets/mute.png")}
                />
              </TouchableOpacity>
              <Text className="text-black-100 text-xs ">Mute</Text>
            </View>
            <View className="flex-col items-center justify-center">
              <TouchableOpacity className="rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
                <Image
                  className="opacity-20"
                  source={require("../assets/keypad-two.png")}
                />
              </TouchableOpacity>
              <Text className="text-black-100 text-xs ">Keypad</Text>
            </View>
            <View className="flex-col items-center justify-center">
              <TouchableOpacity className="rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
                <Image
                  className="opacity-20"
                  source={require("../assets/speaker.png")}
                />
              </TouchableOpacity>
              <Text className="text-black-100 text-xs ">Speaker</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-col items-center justify-center">
              <TouchableOpacity className="rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
                <Image
                  className="opacity-20"
                  source={require("../assets/message-two.png")}
                />
              </TouchableOpacity>
              <Text className="text-black-100 text-xs ">Message</Text>
            </View>
            <View className="flex-col items-center justify-center">
              <TouchableOpacity className="rounded-full bg-grey-100 w-[72px] items-center justify-center h-[72px]">
                <Image
                  className="opacity-20"
                  source={require("../assets/contact-two.png")}
                />
              </TouchableOpacity>
              <Text className="text-black-100 text-xs ">Contacts</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <View className="text-black-100 rounded-full  w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity className="flex-col items-center justify-center">
                <Text className="text-3xl mb-1"></Text>
                <Text className="text-[10px]"></Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full  w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity className="flex-col items-center justify-center">
                <Text className="text-3xl mb-1"></Text>
                <Text className="text-[10px]"></Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity className="flex-col items-center justify-center">
                <Text className="text-3xl mb-1"></Text>
                <Text className="text-[10px]"></Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <View className="text-black-100 rounded-full  w-[72px] items-center justify-center h-[72px]">
              <TouchableOpacity>
                <Text className="text-3xl mb-1"></Text>
                <Text className="text-[10px]"></Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full w-[72px] flex-col items-center justify-center h-[72px]">
              <TouchableOpacity className="flex-col items-center justify-center">
                <Text className="text-3xl mb-1"></Text>
                <Text className="text-[10px]"></Text>
              </TouchableOpacity>
            </View>
            <View className="text-black-100 rounded-full w-[72px] items-center justify-center h-[72px]">
              <Text className="text-3xl mb-1"></Text>
              <Text className="text-[10px]"></Text>
            </View>
          </View>
          <View className="flex-row justify-center items-center mb-3">
            <View className="flex-col items-center justify-center">
              <TouchableOpacity className="rounded-full bg-red-100 w-[72px] items-center justify-center h-[72px]">
                <Image source={require("../assets/phone-two.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OutgoingCallsFour;
