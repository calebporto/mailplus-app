import { Text, TouchableOpacity, View } from "react-native";
import { MenuItem } from "./types";

interface QuickAccessProps {
  items: MenuItem[];
  onItemPress?: (item: MenuItem) => void;
}

export function QuickAccess({ items, onItemPress }: QuickAccessProps) {
  return (
    <>
      <Text className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 mt-2">
        Acesso rápido
      </Text>

      <View className="flex-row flex-wrap gap-3 mb-10">
        {items.map((item) => (
          <TouchableOpacity
            key={item.label}
            activeOpacity={0.8}
            onPress={() => onItemPress?.(item)}
            className="bg-white rounded-2xl p-4 items-center justify-center"
            style={{ width: "47%" }}
          >
            <Text className="text-3xl mb-2">{item.icon}</Text>
            <Text className="text-gray-700 text-sm font-semibold">
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
