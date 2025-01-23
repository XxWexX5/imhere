import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import "../styles/global.css";
import { Participant } from "../components/Participant";

export default function RootLayout() {
  function handleParticipantAdd() {
    console.log("Here!");
  }

  return (
    <SafeAreaView className="mt-[2vh] px-[5vw]">
      <View className="w-full gap-[.65vh]">
        <Text className="text-white font-bold text-[5vw]">Nome do evento</Text>
        <Text className="text-gray-400 text-[3vw]">
          Sexta, 4 de Novembro de 2022.
        </Text>
      </View>

      <View className="gap-y-[5vh]">
        <View className="flex-row gap-x-[3vw] mt-[2vh]">
          <TextInput
            className="flex-1 h-[5vh] rounded-[1.35vw] bg-gray-700 text-white px-[4vw] text-[3.5vw]"
            placeholder="Nome do participante"
          />

          <TouchableOpacity
            className="bg-green-500 w-[10vw] h-[10vw] rounded-[1.35vw] justify-center items-center"
            onPress={handleParticipantAdd}
          >
            <Text className="text-white text-[6vw]">+</Text>
          </TouchableOpacity>
        </View>

        <View className="gap-y-[1.5vh]">
          <Participant />

          <Participant />
        </View>
      </View>
    </SafeAreaView>
  );
}
