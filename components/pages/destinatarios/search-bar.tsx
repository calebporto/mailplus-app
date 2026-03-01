import { Text, TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = "Buscar...",
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 gap-3 shadow-sm mb-3" style={{ elevation: 1 }}>
      <Text className="text-gray-400 text-base">🔍</Text>
      <TextInput
        className="flex-1 text-gray-800 text-sm"
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      {value.length > 0 && (
        <Text
          className="text-gray-400 text-base"
          onPress={() => onChangeText("")}
        >
          ✕
        </Text>
      )}
    </View>
  );
}
