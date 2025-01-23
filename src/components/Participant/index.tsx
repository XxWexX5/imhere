import { Text, TouchableOpacity, View } from "react-native";

interface ParticipantProps {
  name: string;
}

export function Participant({ name }: ParticipantProps) {
  return (
    <View className="flex-row gap-x-[3vw]">
      <View className="flex-1 w-full bg-gray-700 h-[5vh] rounded-[1.35vw] px-[.5vw] text-[3.5vw] items-center flex-row">
        <Text className="text-white px-[4vw]">{name}</Text>
      </View>

      <TouchableOpacity className="bg-red-500 w-[10vw] h-[10vw] rounded-[1.35vw] justify-center items-center">
        <Text className="text-white text-[6vw]">-</Text>
      </TouchableOpacity>
    </View>
  );
}
