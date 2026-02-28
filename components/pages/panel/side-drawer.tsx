import {
    Animated,
    Dimensions,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { MenuItem } from "./types";

const DRAWER_WIDTH = Dimensions.get("window").width * 0.72;

interface SideDrawerProps {
  userName: string;
  userPlan: string;
  items: MenuItem[];
  isOpen: boolean;
  translateX: Animated.Value;
  onClose: () => void;
  onLogout: () => void;
  onItemPress?: (item: MenuItem) => void;
}

export function SideDrawer({
  userName,
  userPlan,
  items,
  isOpen,
  translateX,
  onClose,
  onLogout,
  onItemPress,
}: SideDrawerProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <Pressable
          className="absolute inset-0 bg-black/40"
          onPress={onClose}
        />
      )}

      {/* Painel lateral */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: DRAWER_WIDTH,
          transform: [{ translateX }],
          zIndex: 50,
          backgroundColor: "rgba(255, 255, 255, 0.97)",
        }}
        className="bg-white shadow-2xl"
      >
        {/* Cabeçalho */}
        <View className="bg-red-600 pt-14 pb-6 px-6">
          <View className="w-14 h-14 rounded-full bg-red-400 items-center justify-center mb-3">
            <Text className="text-white text-2xl font-bold">
              {userName.charAt(0)}
            </Text>
          </View>
          <Text className="text-white text-lg font-bold">{userName}</Text>
          <Text className="text-red-200 text-xs mt-0.5">{userPlan}</Text>
        </View>

        {/* Itens */}
        <ScrollView className="flex-1 pt-3">
          {items.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              activeOpacity={0.7}
              onPress={() => onItemPress?.(item)}
              className={`flex-row items-center px-6 py-4 ${
                index !== items.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              <Text className="text-xl mr-4">{item.icon}</Text>
              <Text className="text-gray-700 text-base font-medium">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sair */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center px-6 py-5 border-t border-gray-100"
          onPress={onLogout}
        >
          <Text className="text-xl mr-4">🚪</Text>
          <Text className="text-red-500 text-base font-semibold">Sair</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
