import { Text, View } from "react-native";
import { Recipient } from "./types";

interface RecipientItemProps {
  recipient: Recipient;
}

export function RecipientItem({ recipient }: RecipientItemProps) {
  const initials = recipient.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <View
      className="bg-white rounded-2xl px-5 py-4 flex-row items-center gap-4 shadow-sm"
      style={{ elevation: 1 }}
    >
      <View className="w-11 h-11 rounded-full bg-red-100 items-center justify-center">
        <Text className="text-red-600 text-sm font-bold">{initials}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-gray-800 text-sm font-semibold" numberOfLines={1}>
          {recipient.name}
        </Text>
        <Text className="text-gray-400 text-xs mt-0.5" numberOfLines={1}>
          {recipient.email}
        </Text>
      </View>
      <Text className="text-gray-300 text-lg">›</Text>
    </View>
  );
}
