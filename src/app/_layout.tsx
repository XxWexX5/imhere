import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import "../styles/global.css";
import { Participant } from "../components/Participant";
import { useState } from "react";

import ToastManager, { Toast } from "toastify-react-native";

type ParticipantType = {
  name: string;
};

export default function RootLayout() {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const [name, setName] = useState("");

  function handleParticipantAdd() {
    if (name === "") return;

    const isDuplicated = participants.filter(
      (participant) => participant.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated.length >= 1) {
      return Toast.error("Já está na lista!");
    }

    setParticipants((prevState) => [...prevState, { name: name }]);

    setName("");

    return Toast.success("Adicionado!");
  }

  function handleParticipantRemove(name: string) {
    const removeParticipant = participants.filter(
      (participant) => participant.name !== name
    );

    setParticipants(removeParticipant);

    return Toast.success("Removido!");
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ToastManager />

      <SafeAreaView className="mt-[2vh] px-[5vw]">
        <View className="w-full gap-[.65vh]">
          <Text className="text-white font-bold text-[5vw]">
            Nome do evento
          </Text>
          <Text className="text-gray-400 text-[3vw]">
            Sexta, 4 de Novembro de 2022.
          </Text>
        </View>
        <View className="gap-y-[5vh]">
          <View className="flex-row gap-x-[3vw] mt-[2vh]">
            <TextInput
              className="flex-1 h-[5vh] rounded-[1.35vw] bg-gray-700 text-white px-[4vw] text-[3.5vw]"
              placeholder="Nome do participante"
              onChangeText={setName}
              value={name}
            />

            <TouchableOpacity
              className="bg-green-500 w-[10vw] h-[10vw] rounded-[1.35vw] justify-center items-center"
              onPress={handleParticipantAdd}
            >
              <Text className="text-white text-[6vw]">+</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={participants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Participant
                key={item.name}
                name={item.name}
                onRemove={handleParticipantRemove}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text className="text-white text-center font-[2vw] leading-[2.5vh]">
                Ninguém chegou no evento ainda? Adicione participantes a sua
                lista de presença!
              </Text>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
