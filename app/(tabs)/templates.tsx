import {
    MENU_ITEMS,
    PanelHeader,
    SideDrawer,
    USER_NAME,
    USER_PLAN,
} from "@/components/pages/panel";
import {
    AddTemplateButton,
    MOCK_TEMPLATES,
    TemplateItem,
} from "@/components/pages/templates";
import { useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    ScrollView,
    Text,
    View,
} from "react-native";

const DRAWER_WIDTH = Dimensions.get("window").width * 0.72;

export default function TemplatesScreen() {
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
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <PanelHeader userName={USER_NAME} onMenuPress={openDrawer} />

        <View className="px-5 pt-6 pb-10">
          <AddTemplateButton />

          <Text className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 mt-3">
            Meus templates ({MOCK_TEMPLATES.length})
          </Text>

          <View className="gap-3">
            {MOCK_TEMPLATES.map((template) => (
              <TemplateItem key={template.id} template={template} />
            ))}
          </View>
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
