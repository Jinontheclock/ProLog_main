import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/shared/haptic-tab';
import { NAVBAR_TABS, NavBarItem } from '@/components/shared/NavBar';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const maxAppWidth = 428; // iPhone 14 Pro Max width
  const appWidth = Math.min(screenWidth, maxAppWidth);

  return (
    <Tabs
      initialRouteName="School"
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          flexDirection: 'row',
          height: 70 + insets.bottom,
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingBottom: insets.bottom,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          marginHorizontal: 'auto',
          maxWidth: appWidth,
          alignSelf: 'center',
          borderWidth: 0,
          borderTopWidth: 1,
          borderColor: '#D5D5D5',
          // Controlled shadow that stays within bounds
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 4,
          // Ensure the shadow doesn't overflow the app container
          overflow: 'visible',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      {NAVBAR_TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: '',
            href: tab.href as any,
            tabBarIcon: ({ focused }) => (
              <NavBarItem 
                label={tab.label}
                iconName={tab.iconName}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
