import { Text, TouchableOpacity, View } from "react-native";

interface PanelHeaderProps {
  userName: string;
  onMenuPress: () => void;
}

export function PanelHeader({ userName, onMenuPress }: PanelHeaderProps) {
  return (
    <View className="bg-gradient-to-b from-red-600 to-red-900 pt-14 pb-6 px-6 rounded-b-[32px]">
      <View className="flex-row items-center justify-between">
        {/* Hamburguer */}
        <TouchableOpacity onPress={onMenuPress} activeOpacity={0.7} className="p-1">
          <View className="w-6 h-0.5 bg-white mb-1.5" />
          <View className="w-6 h-0.5 bg-white mb-1.5" />
          <View className="w-6 h-0.5 bg-white" />
        </TouchableOpacity>

        {/* Logo / título */}
        <Text className="text-white text-base font-bold tracking-wide">
          Disparador de E-mails
        </Text>

        {/* Avatar */}
        <View className="w-9 h-9 rounded-full bg-red-400 items-center justify-center">
          <Text className="text-white text-sm font-bold">
            {userName.charAt(0)}
          </Text>
        </View>
      </View>

      {/* Saudação */}
      <View className="mt-5">
        <Text className="text-red-200 text-sm">Bem-vindo de volta,</Text>
        <Text className="text-white text-2xl font-bold">{userName}</Text>
      </View>
    </View>
  );
}
