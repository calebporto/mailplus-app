import {
  MENU_ITEMS,
  PanelHeader,
  SideDrawer,
  USER_NAME,
  USER_PLAN,
} from "@/components/pages/panel";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useRef, useState } from "react";
import { Animated, Dimensions, Text, TouchableOpacity, View } from "react-native";

const DRAWER_WIDTH = Dimensions.get("window").width * 0.72;

export default function DispararScreen() {
  const [recipientCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  function openDrawer() {
    setDrawerOpen(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }

  function closeDrawer() {
    Animated.timing(translateX, {
      toValue: -DRAWER_WIDTH,
      duration: 220,
      useNativeDriver: true,
    }).start(() => setDrawerOpen(false));
  }

  return (
    <View className="flex-1 bg-gray-50">
      <PanelHeader userName={USER_NAME} onMenuPress={openDrawer} />

      {/* Content */}
      <View className="flex-1 px-5 pt-6">
        <Text className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
          Configuração
        </Text>

        {/* Adicionar destinatários */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-white rounded-2xl px-5 py-4 flex-row items-center justify-between mb-3 shadow-sm"
          style={{ elevation: 1 }}
        >
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-xl bg-red-50 items-center justify-center">
              <Text className="text-lg">👥</Text>
            </View>
            <View>
              <Text className="text-gray-800 text-sm font-semibold">
                Adicionar destinatários
              </Text>
              <Text className="text-gray-400 text-xs mt-0.5">
                {recipientCount === 0
                  ? "Nenhum destinatário selecionado"
                  : `${recipientCount} destinatário${recipientCount !== 1 ? "s" : ""} selecionado${recipientCount !== 1 ? "s" : ""}`}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-2">
            {recipientCount > 0 && (
              <View className="bg-red-600 rounded-full px-2.5 py-0.5">
                <Text className="text-white text-xs font-bold">
                  {recipientCount}
                </Text>
              </View>
            )}
            <Text className="text-gray-300 text-lg">›</Text>
          </View>
        </TouchableOpacity>

        {/* Selecionar template */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-white rounded-2xl px-5 py-4 flex-row items-center justify-between shadow-sm"
          style={{ elevation: 1 }}
        >
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-xl bg-red-50 items-center justify-center">
              <Text className="text-lg">📄</Text>
            </View>
            <View>
              <Text className="text-gray-800 text-sm font-semibold">
                Selecionar template
              </Text>
              <Text className="text-gray-400 text-xs mt-0.5">
                Nenhum template selecionado
              </Text>
            </View>
          </View>
          <Text className="text-gray-300 text-lg">›</Text>
        </TouchableOpacity>
      </View>

      {/* Send button */}
      <View className="px-5 pb-8">
        <PrimaryButton label="Enviar" />
      </View>

      <SideDrawer
        userName={USER_NAME}
        userPlan={USER_PLAN}
        items={MENU_ITEMS}
        isOpen={drawerOpen}
        translateX={translateX}
        onClose={closeDrawer}
        onLogout={closeDrawer}
      />
    </View>
  );
}
