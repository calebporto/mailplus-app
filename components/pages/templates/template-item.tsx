import { Text, TouchableOpacity, View } from "react-native";
import { Template } from "./types";

interface TemplateItemProps {
  template: Template;
  onPress?: (template: Template) => void;
}

export function TemplateItem({ template, onPress }: TemplateItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress?.(template)}
      className="bg-white rounded-2xl px-5 py-4 flex-row items-center justify-between shadow-sm"
      style={{ elevation: 1 }}
    >
      <View className="flex-row items-center gap-4">
        <View className="w-12 h-12 rounded-xl bg-red-50 items-center justify-center">
          <Text className="text-2xl">{template.icon}</Text>
        </View>
        <View>
          <Text className="text-gray-800 text-sm font-semibold">
            {template.name}
          </Text>
          <Text
            className="text-gray-400 text-xs mt-0.5"
            numberOfLines={1}
            style={{ maxWidth: 210 }}
          >
            {template.description}
          </Text>
          <Text className="text-red-400 text-xs mt-1">
            Editado: {template.lastEdited}
          </Text>
        </View>
      </View>
      <Text className="text-gray-300 text-lg">›</Text>
    </TouchableOpacity>
  );
}
