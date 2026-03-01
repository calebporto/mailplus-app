import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="panel"
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="disparar"
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="destinatarios"
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
