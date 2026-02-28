import {
    DispatchButton,
    EMAILS_USED,
    MENU_ITEMS,
    PanelHeader,
    PLAN_LIMIT,
    QuickAccess,
    SideDrawer,
    UsageCard,
    USER_NAME,
    USER_PLAN,
} from "@/components/pages/panel";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Animated, Dimensions, ScrollView, View } from "react-native";

const DRAWER_WIDTH = Dimensions.get("window").width * 0.72;

export default function PanelScreen() {
  const router = useRouter();
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

  function handleLogout() {
    closeDrawer();
    setTimeout(() => router.replace("/(tabs)/login"), 250);
  }

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <PanelHeader userName={USER_NAME} onMenuPress={openDrawer} />

        <View className="px-5 pt-6">
          <DispatchButton />

          <UsageCard planLimit={PLAN_LIMIT} emailsUsed={EMAILS_USED} />
          <QuickAccess items={MENU_ITEMS} />
        </View>
      </ScrollView>

      <SideDrawer
        userName={USER_NAME}
        userPlan={USER_PLAN}
        items={MENU_ITEMS}
        isOpen={drawerOpen}
        translateX={translateX}
        onClose={closeDrawer}
        onLogout={handleLogout}
      />
    </View>
  );
}
