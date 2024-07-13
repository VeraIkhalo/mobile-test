import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Inter-Black": require("../assets/font/static/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/font/static/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/font/static/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../assets/font/static/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../assets/font/static/Inter-Light.ttf"),
    "Inter-Medium": require("../assets/font/static/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/font/static/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/font/static/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/font/static/Inter-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
