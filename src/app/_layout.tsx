import { Text, View, TextInput, TouchableOpacity } from "react-native";

import "../styles/global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  function handleParticipantAdd() {
    console.log("Here!");
  }

  return (
    <SafeAreaView className="mt-[10vh] px-[5vw] gap-[.85vh]">
      <Text className="text-white font-bold text-[5vw]">Nome do evento</Text>
      <Text className="text-gray-400 text-[3vw]">
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View className="flex-row gap-x-[3vw]">
        <TextInput className="flex-1 h-[5vh] rounded-[1.35vw] bg-gray-700 text-white px-[4vw] text-[3.5vw]" />

        <TouchableOpacity
          className="bg-green-500 w-[10vw] h-[10vw] rounded-[1.35vw] justify-center items-center"
          onPress={handleParticipantAdd}
        >
          <Text className="text-white text-[6vw]">+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
