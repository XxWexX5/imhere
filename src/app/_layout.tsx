import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import "../styles/global.css";
import { Participant } from "../components/Participant";
import { useState } from "react";

type ParticipantType = {
  name: string;
};

export default function RootLayout() {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const [name, setName] = useState("");

  function handleParticipantAdd() {
    setParticipants([...participants, { name: name }]);

    return setName("");
  }

  function handleParticipantRemove(name: string) {
    const removeParticipant = participants.filter(
      (participant) => participant.name !== name
    );

    return setParticipants(removeParticipant);
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
            onChangeText={(value) => setName(value)}
            value={name}
          />

          <TouchableOpacity
            className="bg-green-500 w-[10vw] h-[10vw] rounded-[1.35vw] justify-center items-center"
            onPress={handleParticipantAdd}
          >
            <Text className="text-white text-[6vw]">+</Text>
          </TouchableOpacity>
        </View>

        <View className="gap-y-[1.5vh]">
          {participants.map((participant, id) => (
            <Participant
              key={`${participant.name}-${id}`}
              name={participant.name}
              handleParticipantRemove={handleParticipantRemove}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
