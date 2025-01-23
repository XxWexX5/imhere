import { Text, View } from "react-native";

import "../styles/global.css";

export default function RootLayout() {
  return (
    <View className="flex-1 justify-center items-center bg-neutral-100">
      <Text className="text-red-500">Hello World!</Text>
      <Text>Hello World 03!</Text>
    </View>
  );
}
