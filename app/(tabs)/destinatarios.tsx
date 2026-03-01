import {
    MOCK_RECIPIENTS,
    RecipientItem,
    SearchBar,
} from "@/components/pages/destinatarios";
import {
    MENU_ITEMS,
    PanelHeader,
    SideDrawer,
    USER_NAME,
    USER_PLAN,
} from "@/components/pages/panel";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const DRAWER_WIDTH = Dimensions.get("window").width * 0.72;

export default function DestinatariosScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
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

  const filtered = MOCK_RECIPIENTS.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <PanelHeader userName={USER_NAME} onMenuPress={openDrawer} />

        <View className="px-5 pt-6 pb-10">
          {/* Search bar */}
          <SearchBar
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Buscar por nome ou e-mail..."
          />

          {/* Add button */}
          <PrimaryButton
            label="Adicionar destinatário"
            icon="＋"
            className="mb-6"
          />

          {/* Section label */}
          <Text className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 mt-3">
            Destinatários ({filtered.length})
          </Text>

          {/* List */}
          <View className="gap-3">
            {filtered.map((recipient) => (
              <RecipientItem key={recipient.id} recipient={recipient} />
            ))}
          </View>

          {/* Ver mais */}
          {filtered.length > 0 && (
            <TouchableOpacity
              activeOpacity={0.7}
              className="mt-4 py-3 items-center rounded-2xl border border-red-200 bg-white"
            >
              <Text className="text-red-600 text-sm font-semibold">
                Ver mais
              </Text>
            </TouchableOpacity>
          )}

          {filtered.length === 0 && (
            <View className="items-center py-12">
              <Text className="text-gray-300 text-4xl mb-3">👥</Text>
              <Text className="text-gray-400 text-sm">
                Nenhum destinatário encontrado
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

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
