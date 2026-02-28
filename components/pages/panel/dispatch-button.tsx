import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export function DispatchButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => router.push("/(tabs)/disparar")}
      className="w-full bg-red-600 rounded-2xl py-4 items-center mb-6"
    >
      <Text className="text-white text-base font-bold tracking-wide">
        Disparar e-mails
      </Text>
    </TouchableOpacity>
  );
}
